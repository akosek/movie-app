import React, { useEffect } from 'react';

// UI & Styles
import { SafeAreaView, View, ScrollView, Alert } from 'react-native';
import MovieCard from '../components/MovieCard/MovieCard';
import styles from './firstScreenStyles';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { TMovieItem } from '../redux/ducks/movies';
import { RootState } from '../redux/rootReducer';
import { getTopMovieData, addFavMovies, addToWatchList } from '../redux/ducks/movies';

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
    },
];

export function FirstScreen(): React.ReactElement {
    const { movieList } = useSelector<RootState, TMovieItem[]>((state) => state.movies);
    const { movieFavList } = useSelector<RootState, TMovieItem>((state) => state.movies.movieFav);
    const { movieWatchList } = useSelector<RootState, TMovieItem[]>((state) => state.movies);

    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(getTopMovieData());
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addToFavorites = (item: TMovieItem) => {
        dispatch(addFavMovies(item));
        console.log('added Fav item', item);
    };

    const addToWatch = (item: TMovieItem) => {
        dispatch(addToWatchList(item));
        console.log('added Watch List item', item);
        console.log('movie List to watch', movieWatchList);
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
                                onFavAdd={() => addToFavorites(item)}
                                onWatchPress={() => addToWatch(item)}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
