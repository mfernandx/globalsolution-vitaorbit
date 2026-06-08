import { useState } from 'react';
import {Alert,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View} from 'react-native';
import { SymptomRecord } from '../model/SymptomRecord';
import { SymptomNameCard } from '../components/SymptomNameCard';
import { Ionicons } from '@expo/vector-icons';
import { SymptomInput } from '../components/SymptomInput';
import { useAuth } from '../context/AuthContext';
import { createSymptomRecord } from '../services/symptomRecordService';

export function MonitoramentoSintomasScreen({navigation,}: any) {

    const [symptomName, setSymptomName] = useState('');
    const [intensity, setIntensity] = useState('');
    const [frequency, setFrequency] = useState('');
    const [description, setDescription] = useState('');
    const [startedAt, setStartedAt] = useState('');
    const {loggedUser} = useAuth();

    async function handleSalvaSintoma() {
        if (!loggedUser?.userId) {
            Alert.alert('Erro', 'Nenhum usuário logado encontrado.');
            return;
        }

        if (!symptomName || !intensity || !frequency || !description || !startedAt) {
            Alert.alert('Atenção','Preencha sintoma, frequência, descrição e data de início.');
            return;
        }

        const intensityNumber = Number(intensity);

        if (intensityNumber < 0 || intensityNumber > 10) {
            Alert.alert('Atenção', 'A intensidade deve ser um número entre 0 e 10.');
            return;
        }

        try {
            const symptomRecord = {
                userId: loggedUser.userId,
                symptomName,
                intensity: intensityNumber,
                frequency,
                startedAt,
                description,
            };
        
            const createdRecord = await createSymptomRecord(symptomRecord);
        
            Alert.alert(
                'Registro salvo',
                `Registro criado com risco: ${createdRecord.riskClassification}`
            );
        
            setSymptomName('');
            setIntensity('');
            setFrequency('');
            setStartedAt('');
            setDescription('');
        
        } catch (error: any) {
            const apiMessage = error.response?.data;
        
            Alert.alert('Erro ao salvar',typeof apiMessage === 'string' ? apiMessage : 'Não foi possível salvar o registro.');
        }

        
    }

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonRetornar} onPress={() => navigation.navigate("Home")} >
                    <Ionicons name="chevron-back" size={32} color="#FFFFFF" />
                </TouchableOpacity>

                <Text style={styles.headerTitulo}>Registrar sintomas</Text>

                <View style={styles.headerPlaceholder} />
            </View>
      

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.conteudo}>

                
                <SymptomNameCard symptomName={symptomName} setSymptomName={setSymptomName}/>

                <View style={styles.card}>
                    <SymptomInput iconType="octicons" iconName="graph" iconColor="#EF5350" label="Intensidade" value={intensity} onChangeText={setIntensity} unit="/10" keyboardType="numeric"/>
                    
                    <SymptomInput iconType="material" iconName="timetable" iconColor="#F4B740" label="Frequência" value={frequency} onChangeText={setFrequency} placeholder='EX: 1 vez ao dia' />
                    
                    <SymptomInput iconType="fontawesome" iconName="calendar-alt" iconColor="#6366F1" label="Quando começou?" value={startedAt} onChangeText={setStartedAt} placeholder='YYYY-MM-DD'/>
                </View>


                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Descrição</Text>
                    <TextInput style={styles.descricaoInput} placeholder="Descreva o que você está sentindo..." placeholderTextColor="#A0A7B8" value={description} onChangeText={setDescription} multiline textAlignVertical="top"/>
                </View>

                <TouchableOpacity style={styles.buttonSalvar} onPress={handleSalvaSintoma}>
                    <Text style={styles.buttonSalvarText}>Salvar registro</Text>
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
        fontSize: 26,
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

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 4,
  },

    cardTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 16,
    },

    descricaoInput: {
        backgroundColor: '#F1F5F9',
        borderRadius: 18,
        minHeight: 120,
        padding: 18,
        color: '#111827',
        fontSize: 16,
    },

    buttonSalvar: {
        backgroundColor: '#5C5DD2',
        borderRadius: 30,
        padding: 18,
        alignItems: 'center',
        shadowColor: '#6366F1',
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 5,
    },

    buttonSalvarText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});