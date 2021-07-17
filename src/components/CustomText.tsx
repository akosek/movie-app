import React, { ReactElement } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

// Config
import Fonts from '../config/fonts';
import Colors from '../config/colors';

export enum TextTypes {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    BUTTON = 'button',
    MICRO = 'micro',
    PLAIN_BUTTON = 'plainButton',
    TEXT_LINK = 'textLink',
    SMALL = 'small',
    SMALL_BOLD = 'smallBold',
    NAVIGATION = 'navigation',
}

const getStyle = (type?: string) => {
    if (type === TextTypes.H1) return fontStyles.h1;
    else if (type === TextTypes.H2) return fontStyles.h2;
    else if (type === TextTypes.H3) return fontStyles.h3;
    else if (type === TextTypes.H4) return fontStyles.h4;
    else if (type === TextTypes.H5) return fontStyles.h5;
    else if (type === TextTypes.BUTTON) return fontStyles.button;
    else if (type === TextTypes.PLAIN_BUTTON) return fontStyles.plainButton;
    else if (type === TextTypes.TEXT_LINK) return fontStyles.textLink;
    else if (type === TextTypes.SMALL) return fontStyles.small;
    else if (type === TextTypes.SMALL_BOLD) return fontStyles.smallBold;
    else if (type === TextTypes.NAVIGATION) return fontStyles.navigation;
    else if (type === TextTypes.MICRO) return fontStyles.micro;
    return fontStyles.body;
};

interface CustomTextProps {
    children: (string | number | ReactElement)[] | string | number | ReactElement;
    type?: TextTypes;
    bold?: boolean;
    style?: StyleProp<TextStyle>;
}

const CustomText = ({ children, type, bold, style, ...props }: CustomTextProps) => (
    <Text style={[getStyle(type), style && style, bold && fontStyles.bold]} {...props}>
        {children || ' '}
    </Text>
);

export default CustomText;

export const fontStyles = StyleSheet.create({
    h1: {
        fontFamily: Fonts.BOLD,
        fontSize: Fonts.H1,
        color: Colors.BLACK,
        lineHeight: Fonts.H1 + 7,
    },
    h2: {
        fontFamily: Fonts.BOLD,
        fontSize: Fonts.H2,
        color: Colors.BLACK,
        lineHeight: Fonts.H2 + 6,
    },
    h3: {
        fontFamily: Fonts.BOLD,
        fontSize: Fonts.H3,
        color: Colors.BLACK,
        lineHeight: Fonts.H3 + 6,
    },
    h4: {
        fontFamily: Fonts.BOLD,
        fontSize: Fonts.H4,
        color: Colors.BLACK,
        lineHeight: Fonts.H4 + 5,
    },
    h5: {
        fontFamily: Fonts.BOLD,
        fontSize: Fonts.H5,
        color: Colors.BLACK,
    },
    bold: {
        fontFamily: Fonts.BOLD,
    },
    body: {
        fontFamily: Fonts.NORMAL,
        fontSize: Fonts.BODY,
        color: Colors.BLACK,
        lineHeight: Fonts.BODY + 8,
    },
    button: {
        fontFamily: Fonts.BOLD,
        fontSize: Fonts.BUTTON,
        color: Colors.BLACK,
        lineHeight: Fonts.BUTTON,
    },
    micro: {
        fontSize: Fonts.MICRO,
        fontFamily: Fonts.BOLD,
        lineHeight: Fonts.MICRO,
        color: Colors.WHITE,
    },
    plainButton: {
        fontFamily: Fonts.NORMAL,
        fontSize: Fonts.PLAIN_BUTTON,
        color: Colors.BLACK,
        lineHeight: Fonts.PLAIN_BUTTON,
    },
    textLink: {
        fontFamily: Fonts.NORMAL,
        fontSize: Fonts.BUTTON,
        color: Colors.BLUE,
        lineHeight: Fonts.BUTTON + 4,
        textDecorationLine: 'underline',
    },
    small: {
        fontFamily: Fonts.NORMAL,
        fontSize: Fonts.SMALL,
        color: Colors.BLACK,
        lineHeight: Fonts.SMALL + 6,
    },
    smallBold: {
        fontFamily: Fonts.BOLD,
        fontSize: Fonts.SMALL,
        color: Colors.BLACK,
        lineHeight: Fonts.SMALL + 6,
    },
    navigation: {
        fontFamily: Fonts.NORMAL,
        fontSize: Fonts.NAVIGATION,
        color: Colors.BLACK,
        lineHeight: Fonts.NAVIGATION,
    },
});
