import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import CustomText, { TextTypes } from '../components/CustomText';

// UI & styles
import MovieCard from '../components/MovieCard/MovieCard';

// Redux
import { useSelector } from 'react-redux';
import { TMovieItem } from '../redux/ducks/movies';
import { RootState } from '../redux/rootReducer';

export function ThirdScreen(): React.ReactElement {
    const { movieWatchList } = useSelector<RootState, TMovieItem[]>((state) => state.movies);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView>
                <Text>Hejk</Text>
                {movieWatchList?.map((item, key) => {
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
                    />;
                })}
            </ScrollView>
        </SafeAreaView>
    );
}
