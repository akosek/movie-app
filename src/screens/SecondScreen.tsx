import React from 'react';

// UI & Styles
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import MovieCard from '../components/MovieCard/MovieCard';
import styles from './firstScreenStyles';

// REDUX
import { RootState } from '../redux/rootReducer';
import { TMovieItem } from '../redux/ducks/movies';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFav } from '../redux/ducks/movies';

export function SecondScreen(): React.ReactElement {
    const { movieFavList } = useSelector<RootState, TMovieItem[]>((state) => state.movies);

    const dispatch = useDispatch();

    const removeMovie = (item: TMovieItem) => {
        dispatch(removeFromFav(item));
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.movieList}>
                    {movieFavList?.map((item: TMovieItem, key: number) => {
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
                                onFavAdd={() => removeMovie(item)}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
