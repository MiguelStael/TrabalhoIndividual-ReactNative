import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E0E10',
        paddingTop: 30,
    },
    header: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0E0E10',
        borderBottomWidth: 1,
        borderBottomColor: '#28282A',
    },
    logo: {
        color: '#00FF00',
        fontSize: 24,
        fontWeight: '900',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    getKicksButton: {
        backgroundColor: '#28282A',
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginRight: 10,
    },
    getKicksButtonText: {
        color: '#00FF00',
        fontSize: 14,
        fontWeight: 'bold',
    },
    profileIcon: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: '#404040',
        borderWidth: 1,
        borderColor: '#00FF00',
    },

    featuredLiveContainer: {
        marginHorizontal: 10,
        marginTop: 15,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
        marginBottom: 20,
    },
    featuredLiveImage: {
        width: '100%',
        height: width * 0.55,
        resizeMode: 'cover',
    },
    liveTagFeatured: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 3,
        zIndex: 1,
    },
    liveText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    featuredLiveInfoOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 10,
    },
    featuredLiveViewers: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    featuredLiveTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    featuredLiveStreamer: {
        color: '#B0B0B0',
        fontSize: 13,
        marginBottom: 5,
    },
    featuredLiveTagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    featuredLiveTag: {
        backgroundColor: '#28282A',
        borderRadius: 15,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 5,
        marginBottom: 5,
    },
    featuredLiveTagText: {
        color: '#B0B0B0',
        fontSize: 11,
    },

    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 15,
    },
    categoryListContent: {
        paddingHorizontal: 10,
    },
    categoryCard: {
        width: width * 0.3,
        height: width * 0.45,
        marginRight: 10,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#1C1C1E',
        position: 'relative',
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    categoryTag: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: '#00FF00',
        paddingHorizontal: 6,
        paddingVertical: 2,
        zIndex: 1,
    },
    categoryTagText: {
        color: '#000',
        fontSize: 10,
        fontWeight: 'bold',
    },
    categoryInfo: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 7,
    },
    categoryTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
    },
    categoryViewers: {
        color: '#B0B0B0',
        fontSize: 10,
    },

    streamList: {
        paddingHorizontal: 5,
        marginBottom: 80,
    },
    streamListColumnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingHorizontal: 5,
    },
    bottomSpace: {
        height: 20,
    },

    bottomNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#18181B',
        borderTopWidth: 1,
        borderTopColor: '#28282A',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        paddingBottom: 10,
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    navIcon: {
        width: 25,
        height: 25,
        backgroundColor: '#606060',
        borderRadius: 12.5,
        marginBottom: 5,
    },
    activeNavIcon: {
        backgroundColor: '#00FF00',
    },
    navText: {
        color: '#B0B0B0',
        fontSize: 11,
        fontWeight: '500',
    },
});