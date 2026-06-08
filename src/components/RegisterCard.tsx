import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { RegisterItem } from "../model/RegisterItem";

export function RegisterCard({ item }: { item: RegisterItem }) {

    const isHealthRecord = item.type === "health";

    return (

        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={[styles.icon,{ backgroundColor: isHealthRecord ? "#6366F1" : "#00D4AA" }]}>
                    {isHealthRecord ? (
                        <FontAwesome5 name="heartbeat" size={22} color="#FFFFFF" />
                    ) : (
                        <Ionicons name="medical-outline" size={24} color="#FFFFFF" />
                    )}
                </View>

                <View style={styles.cardTituloArea}>
                    <Text style={styles.cardTitulo}>{item.title}</Text>
                    <Text style={styles.cardSubtitulo}>{item.subtitle}</Text>
                </View>

                <Text style={styles.cardData}>{new Date(item.date).toLocaleDateString('pt-BR')}</Text>
            </View>

            <View style={styles.detailsContainer}>
                {item.details.map((detail) => (<Text key={detail} style={styles.detailText}>{detail}</Text>))}
            </View>

        </View>
    );
}


const styles = StyleSheet.create({

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        padding: 18,
        marginBottom: 18,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 4,
    },

    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
    },

    icon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 14,
    },

    cardTituloArea: {
        flex: 1,
    },

    cardTitulo: {
        color: "#111827",
        fontSize: 17,
        fontWeight: "bold",
    },

    cardSubtitulo: {
        color: "#64748B",
        fontSize: 14,
        marginTop: 3,
    },

    cardData: {
        color: "#64748B",
        fontSize: 13,
        fontWeight: "bold",
    },

    detailsContainer: {
        backgroundColor: "#F1F5F9",
        borderRadius: 18,
        padding: 14,
        marginTop: 16,
        gap: 6,
    },

    detailText: {
        color: "#334155",
        fontSize: 14,
        fontWeight: "500",
    },
});
