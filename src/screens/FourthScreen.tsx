import React from 'react';

import { SafeAreaView, ScrollView, View } from 'react-native';
import CustomText, { TextTypes } from '../components/CustomText';

// Redux
import { useSelector } from 'react-redux';
import { TMovieItem } from '../redux/ducks/movies';
import { RootState } from '../redux/rootReducer';

// UI & styles
import MovieCard from '../components/MovieCard/MovieCard';
import styles from './firstScreenStyles';

export function FourthScreen(): React.ReactElement {
    const { movieWatchList } = useSelector<RootState, TMovieItem[]>((state) => state.movies);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView>
                <View style={styles.movieList}>
                    {movieWatchList?.map((item, key) => {
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
                                //onFavAdd={() => addToFavorites(item)}
                                onWatchPress={() => console.log('my watchlist', movieWatchList)}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
