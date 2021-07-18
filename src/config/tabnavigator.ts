import { Platform } from 'react-native';

import Colors from './colors';
import Fonts from './fonts';
import { BottomTabBarOptions } from '@react-navigation/bottom-tabs/src/types';
import { hasNotch } from '../utils/device';

export const tabLabels = {
    FIRST_SCREEN: 'Top',
    SECOND_SCREEN: 'Favourites',
    THIRD_SCREEN: 'WatchList',
    FOURTH_SCREEN: 'Favourite',
};

export const tabConfig: BottomTabBarOptions = {
    style: {
        height: hasNotch ? 75 : 65,
        paddingTop: 10,
        elevation: 0,
        paddingBottom: hasNotch ? 15 : 5,
    },
    activeTintColor: Colors.BLUE,
    keyboardHidesTabBar: Platform.OS === 'android',
    inactiveTintColor: Colors.BLACK_HALF,
    labelStyle: {
        fontSize: Fonts.NAVIGATION,
        fontFamily: Fonts.NORMAL,
        paddingBottom: 5,
    },
};
