import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 15,
    },

    // Header
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    logo: {
        color: "#32ff32",
        fontSize: 32,
        fontWeight: "bold",
    },

    userIcon: {
        width: 35,
        height: 35,
        borderRadius: 20,
    },

    // Banner
    banner: {
        width: "100%",
        height: 190,
        borderRadius: 12,
        marginTop: 15,
    },

    // Seção título
    section: {
        color: "white",
        marginTop: 25,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
    },

    // Categorias horizontais
    catCard: {
        marginRight: 12,
        width: 120,
    },

    catImg: {
        width: 120,
        height: 160,
        borderRadius: 12,
    },

    catName: {
        color: "white",
        marginTop: 6,
        fontSize: 14,
        fontWeight: "600",
    },

    // Cards de lives
    card: {
        backgroundColor: "#111",
        borderRadius: 12,
        flexDirection: "row",
        padding: 10,
        marginBottom: 15,
    },

    cardImg: {
        width: 130,
        height: 90,
        borderRadius: 10,
    },

    cardInfo: {
        marginLeft: 12,
        justifyContent: "space-between",
    },

    cardTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

    cardUser: {
        color: "#aaa",
        fontSize: 14,
    },

    cardViewers: {
        color: "#32ff32",
        fontSize: 13,
        fontWeight: "bold",
    },
});
