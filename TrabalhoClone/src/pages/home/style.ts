import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        color: '#00cc00',
        fontSize: 28,
        fontWeight: 'bold',
    },
    profileIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#303030',
    },
    liveStreamPreview: {
        height: 200,
        backgroundColor: '#303030',
        marginHorizontal: 10,
        borderRadius: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    previewText: {
        color: '#fff',
        fontSize: 16,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    categoryList: {
        paddingLeft: 10,
        marginBottom: 20,
    },
    categoryCard: {
        width: 100,
        height: 120,
        marginRight: 10,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#303030',
        justifyContent: 'flex-end',
        padding: 5,
    },
    categoryTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    categoryViewers: {
        color: '#b0b0b0',
        fontSize: 10,
    },
    streamList: {
        paddingHorizontal: 5,
    },
    bottomSpace: {
        height: 50,
    }
});