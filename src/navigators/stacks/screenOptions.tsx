import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

// Config
import Colors from '../../config/colors';

export const screenOptionsBase = {
    contentStyle: { backgroundColor: Colors.WHITE },
    headerShown: true,
    headerStyle: {
        backgroundColor: Colors.WHITE,
        shadowOpacity: 0,
        borderBottomColor: 'transparent',
        elevation: 0,
        shadowColor: 'transparent',
    },
};

export type GenericStackNavigationprop = StackNavigationProp<any, any>;

type SubPageScreenOptionsProps = {
    navigation: GenericStackNavigationprop;
    title?: string;
};

export const subPageScreenOptions = ({  }: SubPageScreenOptionsProps) => {
    return {
        ...screenOptionsBase,
    };
};
