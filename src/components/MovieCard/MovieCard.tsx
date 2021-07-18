import React, { useState } from 'react';

// UI & Styles
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button, Overlay, Icon } from 'react-native-elements';

import styles from './movieCardStyles';

export type Props = {
    id: string;
    title: string;
    image?: {};
    rating?: string;
    year?: string;
    crew?: string;
    onFavAdd?: () => void;
    onWatchPress?: () => void;
};

export default function MovieCard(props: Props) {
    const [visible, setVisible] = useState(false);

    const toogleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <>
            <TouchableOpacity style={styles.movieCard} onPress={() => setVisible(true)}>
                <Image source={props.image} resizeMode="cover" style={styles.coverImage} />
                <Text style={styles.movieTitle}>{props.title}</Text>
                <View style={styles.infoBox}>
                    <Text>{props.rating}</Text>
                    <Text>{props.year}</Text>
                </View>
            </TouchableOpacity>
            <Overlay isVisible={visible} onBackdropPress={toogleOverlay} overlayStyle={styles.overlayStyle}>
                <View style={styles.overlayInfo}>
                    <Image source={props.image} style={styles.overlayImage} />
                    <View style={styles.overlayDetail}>
                        <Text style={styles.overlayTitle}>{props.title}</Text>
                        <Text>{props.crew}</Text>
                    </View>
                </View>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Eget sit amet tellus cras. Convallis posuere morbi leo urna molestie at elementum. Blandit turpis cursus in hac
                    habitasse platea. Tellus mauris a diam maecenas sed. Netus et malesuada fames ac turpis egestas. A iaculis at erat
                    pellentesque. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla.
                </Text>

                <Button
                    title="Favourite"
                    type="clear"
                    onLongPress={props.onFavAdd}
                    onPress={props.onFavAdd}
                    icon={<Icon name="arrow-right" size={30} color="blue" />}
                />
                <Button
                    onLongPress={props.onWatchPress}
                    onPress={props.onWatchPress}
                    icon={{
                        name: 'arrow-right',
                        size: 15,
                        color: 'blue',
                    }}
                    title="Add to watchlist"
                    type="outline"
                />
            </Overlay>
        </>
    );
}
