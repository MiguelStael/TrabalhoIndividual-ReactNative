import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    cardContainer: {
        width: width * 0.47,
        marginHorizontal: width * 0.015,
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 5,
        backgroundColor: '#303030',
    },
    infoContainer: {
        paddingTop: 8,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 2,
    },
    streamerName: {
        color: '#b0b0b0',
        fontSize: 12,
    },
    liveTag: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: '#ff0000',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
        zIndex: 10,
    },
    liveText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    }
});