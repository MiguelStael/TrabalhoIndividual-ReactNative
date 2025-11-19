import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 30) / 2;

export const styles = StyleSheet.create({
    cardContainer: {
        width: cardWidth,
        backgroundColor: '#0E0E10',
    },
    imageWrapper: {
        position: 'relative',
        width: '100%',
        height: cardWidth * 0.6,
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    liveTag: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: '#FF0000',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
        zIndex: 10,
    },
    liveText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    viewersOverlay: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    viewersText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#404040',
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#00FF00',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 2,
    },
    streamerName: {
        color: '#B0B0B0',
        fontSize: 11,
        marginBottom: 4,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: '#28282A',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 3,
        marginRight: 5,
        marginBottom: 5,
    },
    tagText: {
        color: '#B0B0B0',
        fontSize: 9,
    },
});