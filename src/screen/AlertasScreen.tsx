import { useEffect, useState } from "react";
import {ActivityIndicator,Alert,ScrollView,StyleSheet,Text,View,} from "react-native";
import { useAuth } from "../context/AuthContext";
import { SystemAlert } from "../model/SystemAlert";
import { AlertCard } from "../components/AlertCard";
import { carregarAlertasControl } from "../controller/alertControl";

export function AlertasScreen() {

    const { loggedUser } = useAuth();
    const [alerts, setAlerts] = useState<SystemAlert[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function carregarAlertas() {
        try {
            const generatedAlerts = await carregarAlertasControl(
                loggedUser?.userId ?? 0
            );

            setAlerts(generatedAlerts);
        } catch (error: any) {
            Alert.alert(
                "Erro",
                error.message || "Não foi possível carregar os alertas."
            );
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {carregarAlertas();}, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitulo}>Alertas</Text>
                <Text style={styles.headerSubtitulo}>Recomendações baseadas no seu último registro</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.conteudo}>
                {isLoading ? (<ActivityIndicator size="large" color="#6366F1" />) : (
                    alerts.map((alert) => (<AlertCard key={alert.id} alert={alert} /> ))
                )}
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#091426",
    },

    header: {
        backgroundColor: "#091426",
        paddingHorizontal: 24,
        paddingTop: 54,
        paddingBottom: 34,
    },

    headerTitulo: {
        color: "#FFFFFF",
        fontSize: 34,
        fontWeight: "bold",
    },

    headerSubtitulo: {
        color: "#CBD5E1",
        fontSize: 16,
        marginTop: 8,
        lineHeight: 22,
    },

    conteudo: {
        backgroundColor: "#F8F9FC",
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        padding: 24,
        paddingBottom: 40,
        minHeight: 720,
    },
});