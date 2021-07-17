import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Navigation
import { subPageScreenOptions } from './screenOptions';
import { ROUTES } from '../../config/routes';
import { SecondScreen } from '../../screens/SecondScreen';

const Stack = createStackNavigator();

export function SecondScreenStack(): React.ReactElement {

    return (
        <Stack.Navigator screenOptions={subPageScreenOptions} initialRouteName={ROUTES.SECOND_SCREEN}>
            <Stack.Screen name={ROUTES.SECOND_SCREEN} component={SecondScreen} />
        </Stack.Navigator>);
}
