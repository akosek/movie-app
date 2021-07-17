import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollBox: {
        flexGrow: 1,
    },
    movieList: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 8,
    },
});

export default styles;
