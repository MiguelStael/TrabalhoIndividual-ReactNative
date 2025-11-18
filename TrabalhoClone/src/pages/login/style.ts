import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 25,
        justifyContent: "center",
    },

    logo: {
        fontSize: 42,
        fontWeight: "bold",
        color: "#32ff32",
        textAlign: "center",
        marginBottom: 50,
    },

    box: {
        backgroundColor: "#0f0f0f",
        padding: 20,
        borderRadius: 12,
    },

    label: {
        color: "#fff",
        marginTop: 12,
        marginBottom: 6,
        fontSize: 14,
    },

    input: {
        backgroundColor: "#1b1b1b",
        padding: 12,
        borderRadius: 8,
        color: "white",
        fontSize: 15,
    },

    button: {
        marginTop: 25,
        backgroundColor: "#32ff32",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
    },

    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#000",
    },

    signUpText: {
        textAlign: "center",
        color: "#7a7a7a",
        marginTop: 18,
    },

    signUp: {
        color: "#32ff32",
    },
});
