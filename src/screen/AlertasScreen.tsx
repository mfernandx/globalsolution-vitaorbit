import { useEffect, useState } from "react";
import {ActivityIndicator,Alert,ScrollView,StyleSheet,Text,View,} from "react-native";
import { useAuth } from "../context/AuthContext";
import { HealthRecord } from "../model/HealthRecord";
import { SystemAlert } from "../model/SystemAlert";
import { getHealthRecordsByUserId } from "../services/healthRecordService";
import { enviaSystemAlerts } from "../services/systemAlertService";
import { AlertCard } from "../components/AlertCard";

export function AlertasScreen() {

    const { loggedUser } = useAuth();
    const [alerts, setAlerts] = useState<SystemAlert[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function carregarAlertas() {
        try {
            if (!loggedUser?.userId) {
                Alert.alert("Erro", "Usuário logado não encontrado.");
                return;
            }

            const records: HealthRecord[] = await getHealthRecordsByUserId(loggedUser.userId);

            const latestRecord = records.length > 0 ? records[0] : null;

            const generatedAlerts = enviaSystemAlerts(latestRecord);

            setAlerts(generatedAlerts);

        } catch {
            Alert.alert("Erro", "Não foi possível carregar os alertas.");

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