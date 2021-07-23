import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
// Navigation
import AppNavigator from './src/navigators/AppNavigator';

// Config
import { CustomFonts } from './src/config/fonts';

// Components
import UpdateChecker from './src/utils/UpdateChecker';

const _loadAssetsAsync = async () => {
    // Load fonts
    await Font.loadAsync(CustomFonts);
};

const AppWrapper = () => {
    const [loaded, setLoaded] = useState(false);

    if (!loaded) {
        return <AppLoading autoHideSplash startAsync={_loadAssetsAsync} onError={console.warn} onFinish={() => setLoaded(true)} />;
    }

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                {!__DEV__ && <UpdateChecker />}
                <AppNavigator />
            </View>
        </Provider>
    );
};

export default function App() {
    return <AppWrapper />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
