import { createAction, ActionType, getType } from 'typesafe-actions';
import { API_URL_TOP, API_URL_POPULAR, MOVIE_DETAILS } from '../../api';
import { AppThunk } from '../../types';

import axios from 'axios';

// Action Creators
export const setTopMovies = createAction('setTopMovies/SET_TOP_MOVIES')<TMovieItem[]>();
export const addFavMovies = createAction('addFavMovies/ADD_FAV_MOVIES')<TMovieDetails>();
export const removeFromFav = createAction('removeFromFav/REMOVE_FROM_FAV')<TMovieItem>();
export const addToWatchList = createAction('addToWatchList/ADD_TO_WATCHLIST')<TMovieItem>();
export const setMovieDetails = createAction('setMovieDetails/SET_MOVIE_DETAILS')<TMovieDetails>();

const actionCreators = {
    setTopMovies,
    addFavMovies,
    removeFromFav,
    addToWatchList,
    setMovieDetails,
};

// Inistial state
export type TMoviesState = Readonly<{
    movieList: TMovieItem[];
    movieFav: TMovieDetails;
    movieFavList: TMovieDetails[];
    movieWatchList: TMovieDetails[];
    movieDetail: TMovieDetails;
}>;

const initialState: TMoviesState = {
    movieList: [],
    movieFavList: [],
    movieWatchList: [],
    movieFav: {
        id: '',
        title: '',
        image: '',
    },
};

export type TMovieItem = {
    id: string;
    title: string;
    image: string;
};

export type TMovieDetails = {
    id: string;
    title: string;
    image: string;
    plot?: string;
};

// Reducer
export type TMoviesTypes = ActionType<typeof actionCreators>;
export default function reducer(state: TMoviesState = initialState, action: TMoviesTypes): TMoviesState {
    switch (action.type) {
        case getType(setTopMovies):
            return { ...state, movieList: action.payload };
        case getType(addFavMovies):
            return { ...state, movieFavList: [...state.movieFavList, action.payload] };
        case getType(removeFromFav):
            return {
                ...state,
                movieFavList: state.movieFavList.filter((movie: TMovieItem) => movie.id !== action.payload.id),
            };
        case getType(addToWatchList):
            return { ...state, movieWatchList: [...state.movieWatchList, action.payload] };
        case getType(setMovieDetails):
            return {
                ...state,
                movieDetail: action.payload,
            };
        default:
            return state;
    }
}

export const getTopMovieData = (): AppThunk => {
    return function (dispatch) {
        let url: string = `${API_URL_POPULAR}`;
        let options: { method: string; url: string } = { method: 'GET', url: url };
        axios
            .request(options)
            .then(function (response) {
                dispatch(setTopMovies(response.data.items));
            })
            .catch(function (error) {
                console.error(error);
            });
    };
};

export const getMovieDetails = (id: string): AppThunk => {
    return function (dispatch) {
        let url = `${MOVIE_DETAILS}` + `${id}`;
        let options: { method: string; url: string } = { method: 'GET', url: url };
        axios
            .request(options)
            .then(function (response) {
                dispatch(setMovieDetails(response));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const actions = {
    ...actionCreators,
};
