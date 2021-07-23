import React from 'react';

// UI & Styles
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import MovieCard from '../components/MovieCard/MovieCard';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import styles from './firstScreenStyles';

// REDUX
import { RootState } from '../redux/rootReducer';
import { TMovieItem } from '../redux/ducks/movies';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromChecked } from '../redux/ducks/movies';

export function SecondScreen(): React.ReactElement {
    const { movieCheckedList } = useSelector<RootState, TMovieItem[]>((state) => state.movies);

    const dispatch = useDispatch();

    const removeMovie = (item: TMovieItem) => {
        dispatch(removeFromChecked(item));
    };

    return (
        <ScrollView>
            <View>
                {movieCheckedList?.map((item: TMovieItem, key) => (
                    <ListItem key={key} bottomDivider>
                        <Avatar source={{ uri: item.image }} />
                        <ListItem.Content>
                            <ListItem.Title>{item.title}</ListItem.Title>
                            <ListItem.Subtitle>{item.year}</ListItem.Subtitle>
                            <Text>{item.rating}</Text>
                        </ListItem.Content>
                        <Icon name={'shield-checkmark'} type={'ionicon'} color={'#f0dc82'} />
                    </ListItem>
                ))}
            </View>
        </ScrollView>
    );
}
