import React from 'react';
import Constants from 'expo-constants';
import { useRef, useEffect, memo } from 'react';
import { View, Animated, TouchableOpacity, StyleSheet } from 'react-native';

// Config
import Colors from '../config/colors';

// Components
import CustomText, { TextTypes } from '../components/CustomText';
import ToastCheck  from './svgs/ToastCheck';

// Utils
import { isAndroid } from '../utils/device';

export enum Intents {
    SUCCESS,
    INFO,
    ERROR,
}

export enum Positions {
    TOP,
    BOTTOM,
}

export type ToastConfig = {
    duration?: number;
    intent?: Intents;
    message: string;
    onPress?: () => void;
};

export type ToastInternalConfig = {
    id?: string;
    index?: number;
    position?: Positions;
    onClose?: (id: string) => void;
};

const HEIGHT = 60;

export const Toast: React.FC<ToastConfig & ToastInternalConfig> = ({
    duration = 2500,
    id,
    index,
    intent = Intents.SUCCESS,
    message,
    onClose,
    onPress,
    position,
}) => {
    const isSuccess = intent === Intents.SUCCESS;
    const topOffset = HEIGHT * (index || 0);

    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 0.5,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            if (duration !== 0) {
                const timer = setTimeout(() => {
                    if (index === 0) clearTimeout(timer);
                    id && onClose && onClose(id);
                }, duration);
            }
        });
    }, []);

    const translateY = animation.interpolate({
        inputRange: [0, 0.5],
        outputRange: [position === Positions.BOTTOM ? topOffset : -topOffset, 0],
    });

    const scale = animation.interpolate({
        inputRange: [0, 0.5],
        outputRange: [0.8, 1],
        extrapolate: 'clamp',
    });

    return (
        <Animated.View style={[{ transform: [{ translateY }, { scale }] }, styles.toast]}>
            <TouchableOpacity
                style={styles.scrollView}
                onPress={() => {
                    onPress && onPress();
                    onClose && id && onClose(id);
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    {isSuccess && <ToastCheck />}
                    <CustomText type={TextTypes.SMALL} style={styles.text}>
                        {message}
                    </CustomText>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    toast: {
        marginTop: isAndroid ? Constants.statusBarHeight : 0,
        backgroundColor: Colors.GREEN_LIGHT,
        height: HEIGHT,
    },
    text: {
        marginLeft: 15,
        color: Colors.BLACK,
    },
});

export default memo(Toast);
