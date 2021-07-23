import React from 'react';

// UI & Styles
import { ScrollView, View, Text } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';

// REDUX
import { RootState } from '../redux/rootReducer';
import { TMovieItem } from '../redux/ducks/movies';
import { useSelector } from 'react-redux';

export function SecondScreen(): React.ReactElement {
    const movieCheckedList = useSelector<RootState, TMovieItem[]>((state) => state.movies.movieCheckedList);

    const modifiedList = movieCheckedList.filter(function (value, index, movieCheckedList) {
        return movieCheckedList.indexOf(value) === index;
    });

    return (
        <ScrollView>
            <View>
                {modifiedList?.map((item: TMovieItem, key) => (
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
