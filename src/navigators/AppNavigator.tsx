import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Config
import { ROUTES } from '../config/routes';

// Components
import CustomText from '../components/CustomText';

// Stacks
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

type CartStackParamList = {
    [ROUTES.BASKET_STACK]: undefined;
};

export type cartButtonNavigationProp = StackNavigationProp<CartStackParamList, ROUTES.BASKET_STACK>;

const FallbackScreen = (
    <View style={{ flex: 1 }}>
        <CustomText>Loading...</CustomText>
    </View>
);

const AppNavigator = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer fallback={FallbackScreen}>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ROUTES.TABS}>
                    <Stack.Screen name={ROUTES.TABS} component={TabNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default AppNavigator;
