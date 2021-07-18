import { createAction, ActionType, getType } from 'typesafe-actions';
import { API_URL_TOP, API_URL_POPULAR } from '../../api';
import { AppThunk } from '../../types';

import axios from 'axios';

// Action Creators
export const setTopMovies = createAction('setTopMovies/SET_TOP_MOVIES')<TMovieItem[]>();
export const addFavMovies = createAction('addFavMovies/ADD_FAV_MOVIES')<TMovieDetails>();
export const removeFromFav = createAction('removeFromFav/REMOVE_FROM_FAV')<TMovieItem>();
export const addToWatchList = createAction('addToWatchList/ADD_TO_WATCHLIST')<TMovieItem>();

const actionCreators = {
    setTopMovies,
    addFavMovies,
    removeFromFav,
    addToWatchList,
};

// Inistial state
export type TMoviesState = Readonly<{
    movieList: TMovieItem[];
    movieFav: TMovieDetails;
    movieFavList: TMovieDetails[];
    movieWatchList: TMovieDetails[];
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

export const actions = {
    ...actionCreators,
};
