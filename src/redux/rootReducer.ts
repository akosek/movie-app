import { persistReducer, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import movies, { TMoviesState } from './ducks/movies';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['movieFavList', 'movieWatchList'],
};

const appReducer = persistCombineReducers(persistConfig, {
    movies: persistReducer<TMoviesState>(persistConfig, movies),
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
