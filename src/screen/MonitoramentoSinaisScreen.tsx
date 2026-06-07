import { useState } from 'react';
import {Alert,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View} from 'react-native';
import {FontAwesome5,Ionicons} from '@expo/vector-icons';
import { HealthRecord } from '../model/HealthRecord';
import { VitalInput } from '../components/VitalInput';


export function MonitoramentoSinaisScreen({navigation,}: any) {

    const [heartRate, setHeartRate] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const [bodyTemperature, setBodyTemperature] = useState('');
    const [oxygenSaturation, setOxygenSaturation] = useState('');
    const [mood, setMood] = useState('');
    const [hydrationLevel, setHydrationLevel] = useState('');
    const [sleepHours, setSleepHours] = useState('');
    const [notes, setNotes] = useState('');
    const currentDate = new Date().toLocaleDateString('pt-BR', {day: '2-digit',month: 'long',year: 'numeric',});

    async function handleSalvaMonitoramento() {

        const healthRecord: HealthRecord = {
            heartRate,
            bloodPressure,
            bodyTemperature,
            oxygenSaturation,
            mood,
            hydrationLevel,
            sleepHours,
            notes,
            recordedAt: new Date().toISOString(),
        };

        console.log('Registro preparado para API:', healthRecord);

        Alert.alert(
            'Registro preparado',
        );

    }

    return (

        <View style={styles.container}>
      
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonRetornar} onPress={() => navigation.navigate("Home")}>
                    <Ionicons name="chevron-back" size={32} color="#FFFFFF" />
                </TouchableOpacity>

                <Text style={styles.headerTitulo}>Registrar sinais</Text>

                <View style={styles.headerPlaceholder} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.conteudo}>
                <View style={styles.dataCard}>
                  <FontAwesome5 name="calendar-alt" size={22} color="#334155" />

                  <Text style={styles.dataText}>Hoje, {currentDate}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Monitoramento</Text>

                    <VitalInput iconType="fontawesome" iconName="heart" iconColor="#EF5350" label="Batimentos cardíacos" value={heartRate} onChangeText={setHeartRate} unit="bpm" keyboardType="numeric"/>

                    <VitalInput iconType="material" iconName="stethoscope" iconColor="#AB47BC" label="Pressão arterial" value={bloodPressure} onChangeText={setBloodPressure} unit="mmHg" placeholder="120/80"/>

                    <VitalInput iconType="fontawesome" iconName="thermometer-half" iconColor="#EF5350" label="Temperatura corporal" value={bodyTemperature} onChangeText={setBodyTemperature} unit="°C" keyboardType="numeric" placeholder="36.6"/>

                    <VitalInput iconType="ionicons" iconName="water-outline" iconColor="#8B5CF6" label="Oxigenação (SpO₂)" value={oxygenSaturation} onChangeText={setOxygenSaturation} unit="%" keyboardType="numeric"/>

                    <VitalInput iconType="ionicons" iconName="happy-outline" iconColor="#F4B740" label="Humor" value={mood} onChangeText={setMood} unit="/10" keyboardType="numeric"/>

                    <VitalInput iconType="ionicons" iconName="water" iconColor="#38BDF8" label="Hidratação" value={hydrationLevel} onChangeText={setHydrationLevel} unit="L" keyboardType="numeric"/>

                    <VitalInput iconType="ionicons" iconName="moon" iconColor="#6366F1" label="Sono" value={sleepHours} onChangeText={setSleepHours} unit="h" keyboardType="numeric" isLast/>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Observações <Text style={styles.opcionalText}>(opcional)</Text></Text>
                    <TextInput style={styles.notesInput} placeholder="Digite sua observação aqui..." placeholderTextColor="#A0A7B8" value={notes} onChangeText={setNotes} multiline textAlignVertical="top"/>
                </View>

                <TouchableOpacity style={styles.buttonSalvar} onPress={handleSalvaMonitoramento}>
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

    dataCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 18,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        marginBottom: 18,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },

    dataText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#334155',
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 18,
    },

    opcionalText: {
        color: '#64748B',
        fontSize: 16,
    },
  
    notesInput: {
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