import { createAction, ActionType, getType } from 'typesafe-actions';
import { API_URL_TOP, API_URL_POPULAR } from '../../api';
import { AppThunk } from '../../types';

import axios from 'axios';

// Action Creators
export const setTopMovies = createAction('setTopMovies/SET_TOP_MOVIES')<TMovieItem[]>();

const actionCreators = {
    setTopMovies,
};

// Inistial state
export type TMoviesState = Readonly<{
    movieList: TMovieItem[];
}>;

const initialState: TMoviesState = {
    movieList: [],
};

export type TMovieItem = {
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
        default:
            return state;
    }
}

export const getTopMovieData = (): AppThunk => {
    return function (dispatch) {
        let url = `${API_URL_POPULAR}`;
        let options = { method: 'GET', url: url };
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
