import React, { useEffect, useState } from 'react';

// UI & Styles
import { SafeAreaView, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import MovieCard from '../components/MovieCard/MovieCard';
import styles from './firstScreenStyles';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { TMovieItem, TMovieDetails } from '../redux/ducks/movies';
import { RootState } from '../redux/rootReducer';
import { getTopMovieData, addCheckedMovie, addToWatchList, getMovieDetails, removeFromWatchlist } from '../redux/ducks/movies';

//TEMPORARY
const testData: any[] = [
    {
        crew: 'Francis Ford Coppola (dir.), Al Pacino, Robert De Niro',
        fullTitle: 'The Godfather: Part II (1974)',
        id: 'tt0071562',
        imDbRating: '9.0',
        imDbRatingCount: '1161454',
        image: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg',
        rank: '3',
        title: 'The Godfather: Part II',
        year: '1974',
        plot: 'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester (Chris Pratt). Determined to save the world for his young daughter, Dan teams up with a brilliant scientist (Yvonne Strahovski) and his estranged father (J.K. Simmons) in a desperate quest to rewrite the fate of the planet.',
    },
    {
        crew: 'Christopher Nolan (dir.), Christian Bale, Heath Ledger',
        fullTitle: 'The Dark Knight (2008)',
        id: 'tt0468569',
        imDbRating: '9.0',
        imDbRatingCount: '2375259',
        image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg',
        rank: '4',
        title: 'The Dark Knight',
        year: '2008',
        plot: 'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester (Chris Pratt). Determined to save the world for his young daughter, Dan teams up with a brilliant scientist (Yvonne Strahovski) and his estranged father (J.K. Simmons) in a desperate quest to rewrite the fate of the planet.',
    },
    {
        crew: 'Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb',
        fullTitle: '12 Angry Men (1957)',
        id: 'tt0050083',
        imDbRating: '8.9',
        imDbRatingCount: '712353',
        image: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg',
        rank: '5',
        title: '12 Angry Men',
        year: '1957',
        plot: 'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester (Chris Pratt). Determined to save the world for his young daughter, Dan teams up with a brilliant scientist (Yvonne Strahovski) and his estranged father (J.K. Simmons) in a desperate quest to rewrite the fate of the planet.',
    },
    {
        crew: 'Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes',
        fullTitle: "Schindler's List (1993)",
        id: 'tt0108052',
        imDbRating: '8.9',
        imDbRatingCount: '1244657',
        image: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg',
        rank: '6',
        title: "Schindler's List",
        year: '1993',
        plot: 'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester (Chris Pratt). Determined to save the world for his young daughter, Dan teams up with a brilliant scientist (Yvonne Strahovski) and his estranged father (J.K. Simmons) in a desperate quest to rewrite the fate of the planet.',
    },
    {
        crew: 'Peter Jackson (dir.), Elijah Wood, Viggo Mortensen',
        fullTitle: 'The Lord of the Rings: The Return of the King (2003)',
        id: 'tt0167260',
        imDbRating: '8.9',
        imDbRatingCount: '1683125',
        image: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg',
        rank: '7',
        title: 'The Lord of the Rings: The Return of the King',
        year: '2003',
        plot: 'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester (Chris Pratt). Determined to save the world for his young daughter, Dan teams up with a brilliant scientist (Yvonne Strahovski) and his estranged father (J.K. Simmons) in a desperate quest to rewrite the fate of the planet.',
    },
];

export function FirstScreen(): React.ReactElement {
    const { movieList } = useSelector<RootState, TMovieItem[]>((state) => state.movies);
    const { movieWatchList } = useSelector<RootState, TMovieItem[]>((state) => state.movies);
    const { movieDetail } = useSelector<RootState, TMovieDetails>((state) => state.movies);
    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(getTopMovieData());
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addToFavorites = (item: TMovieItem) => {
        dispatch(addCheckedMovie(item));
        Alert.alert('Movie marked as watched');
    };

    const addToWatch = (item: TMovieItem) => {
        dispatch(addToWatchList(item));
        Alert.alert('Movie added to yoour watch list');
    };

    const openMovieModal = (id: string) => {
        dispatch(getMovieDetails(id));
        console.log('moje ploooty', movieDetail?.data.plot);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollBox}>
                <View style={styles.movieList}>
                    {testData?.map((item, key) => {
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
                                plot={item.plot}
                                //plot={movieDetail?.data.plot}
                                onCardPress={() => {
                                    openMovieModal(item.id);
                                }}
                                onCheckedAdd={() => {
                                    addToFavorites(item);
                                }}
                                onWatchPress={() => addToWatch(item)}
                                //  isInWatchlist={checkWatchList(item)}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
