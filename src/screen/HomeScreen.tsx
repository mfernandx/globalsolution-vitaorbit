import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from "react-native";
import { Header } from "../components/Header";
import { VitalCard } from "../components/VitalCard";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getHealthRecordsByUserId } from "../services/healthRecordService";

export function HomeScreen({navigation,}: any) {

    const { loggedUser } = useAuth();
    const [lastRecord, setLastRecord] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    async function carregarUltimoRegistro() {
        try {
            if (!loggedUser?.userId) {
                Alert.alert("Erro", "Usuário logado não encontrado.");
                return;
            }

            const registros = await getHealthRecordsByUserId(loggedUser.userId);

            if (registros.length > 0) {
                setLastRecord(registros[0]);
            }

        } catch (error) {
            Alert.alert("Erro", "Não foi possível carregar o último registro.");

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {carregarUltimoRegistro();}, []);

    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <Header />

                <View style={styles.conteudo}>

                    <View style={styles.containerTitulo}>
                        <Text style={styles.tituloDashboard}>Resumo de hoje</Text>
                        <Text style={styles.ultimaAtualizacao}>Atualizado</Text>
                    </View>

                    <View style={styles.containerCards}>
                        <VitalCard titulo="Batimentos" valor={lastRecord ? String(lastRecord.heartRate) : "-"} unidade="bpm" icon="heart" cor="#FF6B81"/>
                    
                        <VitalCard titulo="Oxigenação" valor={lastRecord ? String(lastRecord.oxygenSaturation) : "-"} unidade="%" icon="water" cor="#8C7BFF"/>
                    
                        <VitalCard titulo="Temperatura" valor={lastRecord ? String(lastRecord.bodyTemperature) : "-"} unidade="°C" icon="thermometer-half" cor="#FF8A4C"/>
                    
                        <VitalCard titulo="Pressão" valor={lastRecord ? String(lastRecord.bloodPressure) : "-"} unidade="mmHg" icon="heartbeat" cor="#A95EFF"/>
                    
                        <VitalCard titulo="Sono" valor={lastRecord ? String(lastRecord.sleepHours) : "-"} unidade="horas" icon="moon" cor="#7B6CFF"/>
                    
                        <VitalCard titulo="Hidratação" valor={lastRecord ? String(lastRecord.hydrationLevel) : "-"} unidade="L" icon="tint" cor="#53B8FF"/>
                    </View>

                    <Text style={styles.tituloAcoes}>Ações rápidas</Text>

                    <View style={styles.acoesContainer}>

                        <TouchableOpacity style={styles.registrarSinaisButton} onPress={() => navigation.navigate("MonitoramentoSinais")}>
                            <Ionicons name="add" size={32} color="white"/>
                            <Text style={styles.acoesText}>Registrar{"\n"}sinais</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.registrarSintomasButton} onPress={() => navigation.navigate("MonitoramentoSintomas")}>
                            <Ionicons name="add" size={32} color="white"/>
                            <Text style={styles.acoesText}>Registrar{"\n"}sintomas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergenciaButton} onPress={() => navigation.navigate("Emergencia")}>
                            <Ionicons name="warning-outline" size={32} color="white"/>
                            <Text style={styles.acoesText}>Emergência</Text>
                        </TouchableOpacity>

                    </View>

                </View> 

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#091426', 
    },

    conteudo: {
        backgroundColor: '#F8F9FC',
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        padding: 24,
        minHeight: 600,
    },

    containerTitulo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    tituloDashboard: {
        fontSize: 28,
        fontWeight: 'bold',
    },

    ultimaAtualizacao: {
        color: '#888',
        alignSelf: 'center',
    },

    containerCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    tituloAcoes: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 16,
    },

    acoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    registrarSinaisButton: {
        width: '31%',
        backgroundColor: '#6366F1',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
    },

    registrarSintomasButton: {
        width: '31%',
        backgroundColor: '#38BDF8',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
    },

    emergenciaButton: {
        width: '32.2%',
        backgroundColor: '#FF6B6B',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
    },

    acoesText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '600',
    }
});