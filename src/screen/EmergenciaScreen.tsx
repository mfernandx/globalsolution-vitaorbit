import { useState } from 'react';
import {Alert,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View} from 'react-native';
import { Emergency } from '../model/Emergency';
import { Ionicons } from '@expo/vector-icons';

export function EmergenciaScreen({navigation,}: any) {

    const [message, setMessage] = useState('');
    const [location, setLocation] = useState('');


    async function handleSolicitaEmergencia() {
        if (!message || !location) {
            Alert.alert(
                'Atenção',
                'Informe uma mensagem e sua localização antes de solicitar ajuda.'
            );
            return;
        }

        const emergencyRequest: Emergency = {
            message,
            location,
        };

        console.log('Emergência preparada para API:', emergencyRequest);

        Alert.alert(
            'Solicitação preparada',
        );

    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonRetornar} onPress={() => navigation.navigate("Home")}>
                    <Ionicons name="chevron-back" size={32} color="#FFFFFF" />
                </TouchableOpacity>

                <Text style={styles.headerTitulo}>Emergência</Text>

                <View style={styles.headerPlaceholder} />
            </View>
      

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.conteudo}>

                <View style={styles.cardEmergencia}>
                    <View style={styles.iconEmergencia}>
                        <Ionicons name="warning-outline" size={42} color="#FFFFFF" />
                    </View>
                
                    <Text style={styles.tituloCardEmergencia}>Solicitação de emergência</Text>
            
                    <Text style={styles.descricaoCardEmergencia}>Use esta área apenas quando precisar enviar um pedido rápido de ajuda.</Text>
                </View>

                <View style={styles.cardMensagem}>
                    <Text style={styles.tituloCardMensagem}>Mensagem rápida</Text>
                    <TextInput style={styles.mensagemInput} placeholder="Ex: Preciso de ajuda médica urgente." placeholderTextColor="#A0A7B8" value={message} onChangeText={setMessage} multiline textAlignVertical="top"/>
                </View>

                <View style={styles.cardLocalizacao}>
                    <Text style={styles.tituloCardLocalizacao}>Localização</Text>
                
                    <View style={styles.localizacaoInput}>
                        <Ionicons name="location-outline" size={24} color="#6366F1" />
                        <TextInput style={styles.input} placeholder="Informe sua localização atual" placeholderTextColor="#A0A7B8" value={location} onChangeText={setLocation}/>
                    </View>
                
                    <Text style={styles.avisoText}>Nos confirme sua localização atual ou aproximada por meio de coordenadas ou informações precisas.</Text>
                </View>

                <TouchableOpacity style={styles.buttonEmergencia} onPress={handleSolicitaEmergencia}>
                    <Text style={styles.buttonEmergenciaText}>Solicitar emergência</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#091426',
    },

    header: {
        backgroundColor: '#091426',
        paddingHorizontal: 24,
        paddingTop: 26,
        paddingBottom: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    buttonRetornar: {
        width: 44,
    },

    headerTitulo: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
    },

    headerPlaceholder: {
        width: 44,
    },

    conteudo: {
        backgroundColor: '#F8F9FC',
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        padding: 24,
        paddingBottom: 40,
    },

    cardEmergencia: {
        backgroundColor: '#FF5252',
        borderRadius: 26,
        padding: 24,
        alignItems: 'center',
        marginBottom: 20,

        shadowColor: '#FF5252',
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 5,
    },

    iconEmergencia: {
        width: 78,
        height: 78,
        borderRadius: 39,
        backgroundColor: 'rgba(255,255,255,0.18)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },

    tituloCardEmergencia: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    descricaoCardEmergencia: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 22,
    },

    cardMensagem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 4,
    },

    tituloCardMensagem: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 16,
    },

    mensagemInput: {
        backgroundColor: '#F1F5F9',
        borderRadius: 18,
        minHeight: 110,
        padding: 18,
        color: '#111827',
        fontSize: 16,
    },

    cardLocalizacao: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 4,
    },

    tituloCardLocalizacao: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 16,
    },

    localizacaoInput: {
        backgroundColor: '#F1F5F9',
        borderRadius: 18,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        flex: 1,
        padding: 16,
        color: '#111827',
        fontSize: 16,
    },

    avisoText: {
        color: '#64748B',
        fontSize: 12,
        marginTop: 14,
        lineHeight: 20,
        textAlign: 'center'
    },

    buttonEmergencia: {
        backgroundColor: '#FF5252',
        borderRadius: 30,
        padding: 18,
        alignItems: 'center',
        shadowColor: '#FF5252',
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 5,
    },

    buttonEmergenciaText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});