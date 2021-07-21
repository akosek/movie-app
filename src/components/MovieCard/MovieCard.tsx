import React, { useState } from 'react';

// UI & Styles
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button, Overlay, Icon } from 'react-native-elements';
import IconButton from './../buttons/IconButton';
import styles from './movieCardStyles';

export type Props = {
    id: string;
    title: string;
    image?: {};
    rating?: string;
    year?: string;
    crew?: string;
    plot?: string;
    onCheckedAdd?: () => void;
    onWatchPress?: () => void;
    onCardPress?: () => void;
    isInWatchlist?: boolean;
};

export default function MovieCard(props: Props) {
    const [visible, setVisible] = useState(false);

    const toogleOverlay = () => {
        setVisible(!visible);
    };

    const pressCard = () => {
        setVisible(true);
        props.onCardPress ? props.onCardPress() : null;
    };

    const markAsWatched = () => {
        setVisible(false);
        props.onCheckedAdd ? props.onCheckedAdd() : null;
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.movieCard}
                onPress={() => {
                    pressCard();
                }}
            >
                <Image source={props.image} resizeMode="cover" style={styles.coverImage} />
                <Text style={styles.movieTitle}>{props.title}</Text>
                <View style={styles.infoBox}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="star" type="ionicon" size={16} color={'orange'} />
                        <Text>{props.rating}</Text>
                    </View>
                    <Text>{props.year}</Text>
                </View>
            </TouchableOpacity>
            <Overlay isVisible={visible} onBackdropPress={toogleOverlay} overlayStyle={styles.overlayStyle}>
                <IconButton
                    icon={'shield-checkmark-outline'}
                    label={'Watched'}
                    style={styles.iconButton}
                    onPress={markAsWatched}
                    size={24}
                />
                <View style={styles.overlayInfo}>
                    <Image source={props.image} style={styles.overlayImage} />
                    <View style={styles.overlayDetail}>
                        <Text style={styles.overlayTitle}>{props.title}</Text>
                        <Text>{props.crew}</Text>
                    </View>
                </View>
                <Text style={styles.plotText}>{props.plot}</Text>
                <View style={{ justifyContent: 'center', padding: 12 }}>
                    {props.onWatchPress ? (
                        <Button
                            onLongPress={props.onWatchPress}
                            onPress={props.onWatchPress}
                            icon={{
                                name: 'add-circle-outline',
                                type: 'ionicon',
                                size: 20,
                                color: 'blue',
                            }}
                            title={props.isInWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
                            type="outline"
                        />
                    ) : null}
                </View>
            </Overlay>
        </View>
    );
}
