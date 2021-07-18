import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';

// Config
import { tabConfig, tabLabels } from '../config/tabnavigator';
import { ROUTES } from '../config/routes';

// Stacks
import { FirstScreen } from '../screens/FirstScreen';
import { SecondScreenStack } from './stacks/SecondScreenStack';
import { SygdomDoedStack } from './stacks/ThirdScreenStack';

// Navigators
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    function onPressTab(): void {
        Haptics.selectionAsync().catch(console.error);
    }

    return (
        <Tab.Navigator tabBarOptions={tabConfig} initialRouteName={ROUTES.FIRST_SCREEN}>
            <Tab.Screen
                listeners={() => ({ tabPress: onPressTab })}
                options={{ tabBarLabel: tabLabels.FIRST_SCREEN }}
                name={ROUTES.FIRST_SCREEN}
                component={FirstScreen}
            />
            <Tab.Screen
                listeners={() => ({ tabPress: onPressTab })}
                options={{ tabBarLabel: tabLabels.THIRD_SCREEN }}
                name={ROUTES.THIRD_SCREEN_STACK}
                component={SygdomDoedStack}
            />
            <Tab.Screen
                listeners={() => ({ tabPress: onPressTab })}
                options={{
                    tabBarLabel: tabLabels.SECOND_SCREEN,
                }}
                name={ROUTES.SECOND_SCREEN_STACK}
                component={SecondScreenStack}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
