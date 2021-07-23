import React from 'react';
import { SafeAreaView, ScrollView, View, Alert } from 'react-native';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { TMovieItem } from '../redux/ducks/movies';
import { RootState } from '../redux/rootReducer';

// UI & styles
import MovieCard from '../components/MovieCard/MovieCard';
import styles from './firstScreenStyles';

import { removeFromWatchlist, addCheckedMovie } from '../redux/ducks/movies';

export function FourthScreen(): React.ReactElement {
    const movieWatchList = useSelector<RootState, TMovieItem[]>((state) => state.movies.movieWatchList);

    const dispatch = useDispatch();

    const removeFromList = (item: TMovieItem) => {
        dispatch(removeFromWatchlist(item));
        dispatch(addCheckedMovie(item));
        setTimeout(() => {
            Alert.alert(`${item.title} was added to your watched collection`);
        }, 300);
    };
    const modifiedList = movieWatchList.filter(function (value, index, movieWatchList) {
        return movieWatchList.indexOf(value) === index;
    });

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView>
                <View style={styles.movieList}>
                    {modifiedList?.map((item, key) => {
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
                                onCheckedAdd={() => removeFromList(item)}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
