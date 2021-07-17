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

// var options = {
//     method: 'GET',
//     url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
//     params: { i: 'tt4154796', type: 'comedy', r: 'json' },
//     headers: {
//         'x-rapidapi-key': 'e7ef204eebmsh450238a0e035542p1a81c7jsn1eb21e103a71',
//         'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
//     },
// };
//
// axios
//     .request(options)
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });

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
