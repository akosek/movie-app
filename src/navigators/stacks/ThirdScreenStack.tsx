import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Navigation
import { subPageScreenOptions } from './screenOptions';
import { ROUTES } from '../../config/routes';
import { FourthScreen } from '../../screens/FourthScreen';

const Stack = createStackNavigator();

export function SygdomDoedStack(): React.ReactElement {

    return (
        <Stack.Navigator screenOptions={subPageScreenOptions} initialRouteName={ROUTES.THIRD_SCREEN}>
            <Stack.Screen name={ROUTES.THIRD_SCREEN} component={FourthScreen} />
        </Stack.Navigator>);
}
