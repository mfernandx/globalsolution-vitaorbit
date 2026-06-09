import { Ionicons } from "@expo/vector-icons";
import { View, Text,  StyleSheet } from "react-native";
import { SystemAlert } from "../model/SystemAlert";


export function AlertCard({ alert }: { alert: SystemAlert }) {

    const colors = getAlertColors(alert.level);

    function getAlertColors(level: string) {
        if (level === "perigo") {
            return {
                main: "#FF5252",
                background: "#FFE4E4",
            };
        }

        if (level === "atencao") {
            return {
                main: "#F59E0B",
                background: "#FEF3C7",
            };
        }

        return {
            main: "#6366F1",
            background: "#E0E7FF",
        };
    }

    return (
        <View style={[styles.alertCard, { borderLeftColor: colors.main }]}>
            <View style={[styles.icon, { backgroundColor: colors.background }]}>
                <Ionicons name={alert.icon as keyof typeof Ionicons.glyphMap} size={30} color={colors.main}/>
            </View>

            <View style={styles.alertTextArea}>
                <Text style={styles.alertTitulo}>{alert.title}</Text>
                <Text style={styles.alertMensagem}>{alert.message}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    alertCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        padding: 18,
        marginBottom: 18,
        borderLeftWidth: 6,
        flexDirection: "row",
        alignItems: "center",

        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 4,
    },

    icon: {
        width: 58,
        height: 58,
        borderRadius: 29,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
    },

    alertTextArea: {
        flex: 1,
    },

    alertTitulo: {
        color: "#111827",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 6,
    },

    alertMensagem: {
        color: "#64748B",
        fontSize: 15,
        lineHeight: 21,
    },
});
