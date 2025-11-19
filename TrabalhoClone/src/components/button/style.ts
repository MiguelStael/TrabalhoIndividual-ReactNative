import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        flexDirection: 'row',
    },
    primary: {
        backgroundColor: '#00cc00',
    },
    secondary: {
        backgroundColor: '#303030',
        borderWidth: 1,
        borderColor: '#404040',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});