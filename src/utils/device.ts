import { Platform } from 'react-native';
import Constants from 'expo-constants';

export const isAndroid = Platform.OS === 'android';
export const hasNotch = Constants.statusBarHeight && Constants.statusBarHeight >= 44;
