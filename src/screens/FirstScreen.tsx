import React, { useEffect } from 'react';

// UI & Styles
import { SafeAreaView, View, ScrollView, Alert } from 'react-native';
import MovieCard from '../components/MovieCard/MovieCard';
import styles from './firstScreenStyles';

// Redux
import { testData } from '../api';
import { useSelector, useDispatch } from 'react-redux';
import { TMovieItem, TMovieDetails } from '../redux/ducks/movies';
import { RootState } from '../redux/rootReducer';
import { getTopMovieData, addCheckedMovie, addToWatchList, getMovieDetails, removeFromWatchlist } from '../redux/ducks/movies';

export function FirstScreen(): React.ReactElement {
    const movieList = useSelector<RootState, TMovieItem[]>((state) => state.movies.movieList);
    const movieDetail = useSelector<RootState, TMovieDetails>((state) => state.movies.movieDetail);
    const isFetchingDetails = useSelector<RootState, boolean>((state) => state.movies.isLoading);

    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(getTopMovieData());
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addToChecked = (item: TMovieItem) => {
        dispatch(addCheckedMovie(item));
    };

    const addToWatch = (item: TMovieItem) => {
        dispatch(addToWatchList(item));
        Alert.alert('Movie added to yoour watch list');
    };

    const openMovieModal = (id: string) => {
        dispatch(getMovieDetails(id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollBox}>
                <View style={styles.movieList}>
                    {movieList?.map((item, key) => {
                        return (
                            <MovieCard
                                id={item.id}
                                key={key}
                                title={item.title}
                                year={item.year}
                                rating={item.imDbRating}
                                crew={item.crew}
                                image={{
                                    uri: item.image,
                                }}
                                isFetching={isFetchingDetails}
                                plot={movieDetail?.data.plot}
                                onCardPress={() => {
                                    openMovieModal(item.id);
                                }}
                                onCheckedAdd={() => {
                                    addToChecked(item);
                                }}
                                onWatchPress={() => addToWatch(item)}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
