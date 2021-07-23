import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

// UI & styles
import MovieCard from '../components/MovieCard/MovieCard';

// Redux
import { useSelector } from 'react-redux';
import { TMovieItem } from '../redux/ducks/movies';
import { RootState } from '../redux/rootReducer';

export function ThirdScreen(): React.ReactElement {
    const movieWatchList = useSelector<RootState, TMovieItem[]>((state) => state.movies.movieWatchList);

    return <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}></SafeAreaView>;
}
