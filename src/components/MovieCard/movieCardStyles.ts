import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    movieCard: {
        flexDirection: 'column',
        width: 160,
        height: 190,
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 16,
    },
    coverImage: {
        flex: 1,
        width: 160,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 16,
    },
    overlayImage: {
        width: 90,
        height: 90,
        borderRadius: 100,
    },
    infoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    movieTitle: {
        textAlign: 'center',
    },
    overlayStyle: {
        width: 340,
    },
    overlayInfo: {
        flexDirection: 'row',
    },
    overlayDetail: {
        flex: 3,
        flexDirection: 'column',
        paddingHorizontal: 6,
    },
    overlayTitle: {
        fontSize: 16,
        marginBottom: 3,
        fontWeight: 'bold',
    },
});

export default styles;
