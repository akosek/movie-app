import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    movieCard: {
        flexDirection: 'column',
        width: 160,
        height: 190,
        backgroundColor: 'white',
        marginBottom: 24,
        marginHorizontal: 6,
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
        padding: 8,
    },
    plotText: {
        paddingHorizontal: 4,
        marginBottom: 6,
        marginTop: 12,
    },
    movieTitle: {
        marginTop: 6,
        paddingHorizontal: 2,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    overlayStyle: {
        width: 340,
        position: 'relative',
    },
    iconButton: {
        position: 'absolute',
        top: -26,
        right: -6,
        zIndex: 10,
    },
    overlayInfo: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
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
