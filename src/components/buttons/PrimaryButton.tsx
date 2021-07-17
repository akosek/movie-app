import React, { ReactElement } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

// Config
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';

// Components
import CustomText from '../CustomText';
import LoadingIndicator from '../LoadingIndicator';

// Utils
import { isAndroid } from '../../utils/device';

const styles = StyleSheet.create({
    pressable: {
        height: 48,
        borderRadius: 6,
        paddingTop: isAndroid ? 0 : 4,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: Colors.YELLOW,
    },
    pressed: {
        backgroundColor: Colors.YELLOW_DARK_27,
    },
    disabled: {
        backgroundColor: Colors.GREEN_20,
    },
    text: {
        textTransform: 'uppercase',
        fontFamily: Fonts.BOLD,
        color: Colors.WHITE,
    },
    disabledText: {
        color: Colors.GREEN_80,
    },
});

type Props = {
    disabled?: boolean;
    onPress?: () => void;
    children: ReactElement | string;
    style?: ViewStyle | ViewStyle[];
    loading?: boolean;
    onPressOut?: () => void;
};

const PrimaryButton = ({ disabled = false, onPress, children, loading = false, style, onPressOut, ...props }: Props) => {
    const onPressObj = onPress && !onPressOut ? (!loading ? onPress : () => null) : null;
    const onPressOutObj = onPressOut && !onPress ? (!loading ? onPressOut : () => null) : null;

    return (
        <Pressable
            disabled={disabled}
            onPress={onPressObj}
            onPressOut={onPressOutObj}
            style={({ pressed }) => [{ ...styles.pressable }, pressed && styles.pressed, disabled ? styles.disabled : null, style && style]}
            {...props}
        >
            {loading && <LoadingIndicator style={{ marginTop: -3 }} />}
            {!loading && <CustomText style={[{ ...styles.text }, disabled ? styles.disabledText : null]}>{children}</CustomText>}
        </Pressable>
    );
};

export default PrimaryButton;
