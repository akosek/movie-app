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

    return (
        <View style={{ position: 'relative' }}>
            <IconButton
                icon={'shield-checkmark-outline'}
                label={'Watched'}
                style={{ position: 'absolute', top: -8, right: 0, zIndex: 10 }}
            />
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
                <View style={styles.overlayInfo}>
                    <Image source={props.image} style={styles.overlayImage} />
                    <View style={styles.overlayDetail}>
                        <Text style={styles.overlayTitle}>{props.title}</Text>
                        <Text>{props.crew}</Text>
                    </View>
                </View>
                <Text style={styles.plotText}>{props.plot}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {props.onCheckedAdd ? (
                        <Button
                            title="I watched it"
                            type="clear"
                            onLongPress={props.onCheckedAdd}
                            onPress={props.onCheckedAdd}
                            icon={
                                <Icon name="shield-checkmark-outline" type="ionicon" size={30} color="blue" style={{ marginRight: 15 }} />
                            }
                        />
                    ) : null}
                    {props.onWatchPress ? (
                        <Button
                            onLongPress={props.onWatchPress}
                            onPress={props.onWatchPress}
                            icon={{
                                name: 'arrow-right',
                                size: 15,
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
