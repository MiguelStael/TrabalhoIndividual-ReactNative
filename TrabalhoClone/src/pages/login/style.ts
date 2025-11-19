import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30,
        textAlign: 'center',
    },
    tabContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#303030',
    },
    tabButton: {
        paddingVertical: 10,
        marginRight: 20,
    },
    activeTab: {
        borderBottomWidth: 3,
        borderBottomColor: '#00cc00',
    },
    tabText: {
        fontSize: 18,
        color: '#b0b0b0',
        fontWeight: '600',
    },
    activeTabText: {
        color: '#fff',
    },
    input: {
        backgroundColor: '#1c1c1c',
        color: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
    },
    forgotPasswordText: {
        color: '#00cc00',
        textAlign: 'right',
        marginTop: -5,
        marginBottom: 20,
        fontSize: 14,
    },
    orText: {
        color: '#b0b0b0',
        textAlign: 'center',
        marginVertical: 15,
        fontSize: 14,
    },
    socialButtonText: {
        fontSize: 16,
        marginLeft: 10,
    }
});