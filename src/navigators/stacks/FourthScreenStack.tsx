import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Navigation
import { subPageScreenOptions } from './screenOptions';
import { ROUTES } from '../../config/routes';
import { ThirdScreen } from '../../screens/ThirdScreen';

const Stack = createStackNavigator();

export function FourthScreenStack(): React.ReactElement {

    return (
        <Stack.Navigator screenOptions={subPageScreenOptions} initialRouteName={ROUTES.FOURTH_SCREEN}>
            <Stack.Screen name={ROUTES.FOURTH_SCREEN} component={ThirdScreen} />
        </Stack.Navigator>);
}
