import { createAction, ActionType, getType } from 'typesafe-actions';
import { API_URL_TOP, API_URL_POPULAR, MOVIE_DETAILS, API_URL_THEATERS } from '../../api';
import { AppThunk } from '../../types';

import axios from 'axios';

// Action Creators
export const setTopMovies = createAction('setTopMovies/SET_TOP_MOVIES')<TMovieItem[]>();
export const addCheckedMovie = createAction('addCheckedMovie/ADD_CHECKED_MOVIES')<TMovieItem>();
export const removeFromChecked = createAction('removeFromChecked/REMOVE_FROM_CHECKED')<TMovieItem>();
export const addToWatchList = createAction('addToWatchList/ADD_TO_WATCHLIST')<TMovieItem>();
export const setMovieDetails = createAction('setMovieDetails/SET_MOVIE_DETAILS')<TMovieDetails>();
export const removeFromWatchlist = createAction('removeFromWatchlist/REMOVE_FROM_WATCHLIST')<TMovieItem>();
export const setIsLoading = createAction('SetIsloading/SET_IS_LOADING')<boolean>();

const actionCreators = {
    setTopMovies,
    addCheckedMovie,
    removeFromChecked,
    addToWatchList,
    removeFromWatchlist,
    setMovieDetails,
    setIsLoading,
};

// Inistial state
export type TMoviesState = Readonly<{
    movieList: TMovieItem[];
    movieFav: TMovieDetails;
    movieCheckedList: TMovieItem[];
    movieWatchList: TMovieDetails[];
    movieDetail: TMovieDetails;
    isLoading: boolean;
}>;

const initialState: TMoviesState = {
    movieList: [],
    movieCheckedList: [],
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
        case getType(addCheckedMovie):
            return {
                ...state,
                movieCheckedList: [...state.movieCheckedList, action.payload],
            };
        case getType(removeFromChecked):
            return {
                ...state,
                movieCheckedList: state.movieCheckedList.filter((movie: TMovieItem) => movie.id !== action.payload.id),
            };
        case getType(addToWatchList):
            return { ...state, movieWatchList: [...state.movieWatchList, action.payload] };
        case getType(setMovieDetails):
            return {
                ...state,
                movieDetail: action.payload,
            };
        case getType(removeFromWatchlist):
            return {
                ...state,
                movieWatchList: state.movieWatchList.filter((movie: TMovieItem) => movie.id !== action.payload.id),
            };
        case getType(setIsLoading):
            return {
                ...state,
                isLoading: action.payload,
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
        dispatch(setIsLoading(true));
        axios
            .request(options)
            .then(function (response) {
                dispatch(setMovieDetails(response));
                dispatch(setIsLoading(false));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const actions = {
    ...actionCreators,
};
