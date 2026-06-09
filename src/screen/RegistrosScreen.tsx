import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, ScrollView, ActivityIndicator} from "react-native";
import { useAuth } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { RegisterCard } from "../components/RegisterCard";
import { RegisterItem } from "../model/RegisterItem";
import { carregarHistoricoControl } from "../controller/recordsControl";


export function RegistrosScreen() {

    const { loggedUser } = useAuth();
    const [registerItems, setRegisterItems] = useState<RegisterItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function carregaHistorico() {

        try {
            const items = await carregarHistoricoControl(loggedUser?.userId ?? 0);

            setRegisterItems(items);

        } catch (error: any) {
            Alert.alert("Erro",error.message || "Não foi possível carregar o histórico.");

        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {carregaHistorico();}, []);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerTitulo}>Histórico</Text>
                <Text style={styles.headerSubtitulo}>Todos os registros feitos na sua órbita de cuidado</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.conteudo}>
                {isLoading ? (<ActivityIndicator size="large" color="#6366F1" /> ) : registerItems.length === 0 ? (
                    <View style={styles.semRegistroCard}>
                        <Ionicons name="document-text-outline" size={54} color="#6366F1" />
                        <Text style={styles.semRegistroTitulo}>Nenhum registro encontrado</Text>
                        <Text style={styles.semRegistroText}>Quando você registrar sinais vitais ou sintomas, eles aparecerão aqui.</Text>
                    </View>
                ) : (

                    registerItems.map((item) => (<RegisterCard key={item.id} item={item} />))
                    
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

    semRegistroCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        padding: 28,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 4,
    },

    semRegistroTitulo: {
        color: "#111827",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 16,
        textAlign: "center",
    },

    semRegistroText: {
        color: "#64748B",
        fontSize: 15,
        textAlign: "center",
        marginTop: 8,
        lineHeight: 22,
    },

});