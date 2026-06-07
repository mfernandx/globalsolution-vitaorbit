import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { Header } from "../components/Header";
import { VitalCard } from "../components/VitalCard";
import { Ionicons } from "@expo/vector-icons";

export function HomeScreen({navigation,}: any) {

    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <Header />

                <View style={styles.conteudo}>

                    <View style={styles.containerTitulo}>
                        <Text style={styles.tituloDashboard}>Resumo de hoje</Text>
                        <Text style={styles.ultimaAtualizacao}>Atualizado agora</Text>
                    </View>

                    <View style={styles.containerCards}>
                        <VitalCard titulo="Batimentos" valor="-" unidade="bpm" icon="heart" cor="#FF6B81"/>
                    
                        <VitalCard titulo="Oxigenação" valor="-" unidade="%" icon="water" cor="#8C7BFF"/>
                    
                        <VitalCard titulo="Temperatura" valor="-" unidade="°C" icon="thermometer-half" cor="#FF8A4C"/>
                    
                        <VitalCard titulo="Pressão" valor="-" unidade="mmHg" icon="heartbeat" cor="#A95EFF"/>
                    
                        <VitalCard titulo="Sono" valor="-" unidade="horas" icon="moon" cor="#7B6CFF"/>
                    
                        <VitalCard titulo="Hidratação" valor="-" unidade="L" icon="tint" cor="#53B8FF"/>
                    </View>

                    <Text style={styles.tituloAcoes}>Ações rápidas</Text>

                    <View style={styles.acoesContainer}>

                        <TouchableOpacity style={styles.registrarSinaisButton} onPress={() => navigation.navigate("MonitoramentoSinais")}>
                            <Ionicons name="add" size={32} color="white"/>
                            <Text style={styles.acoesText}>Registrar{"\n"}sinais</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.registrarSintomasButton} onPress={() => navigation.navigate("MonitoramentoSintomas")}>
                            <Ionicons name="add" size={28} color="white"/>
                            <Text style={styles.acoesText}>Registrar{"\n"}sintomas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.emergenciaButton}>
                            <Ionicons name="warning-outline" size={30} color="white"/>
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