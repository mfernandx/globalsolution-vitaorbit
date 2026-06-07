import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type SymptomNameCardProps = {
    symptomName: string;
    setSymptomName: (value: string) => void;
};

const symptomOptions = ['Dor de cabeça','Tontura','Falta de ar','Náusea','Febre','Dor no peito','Desmaio','Outro',];

export function SymptomNameCard({symptomName,setSymptomName,}: SymptomNameCardProps) {

    return (

        <View style={styles.card}>
            <Text style={styles.cardTitulo}>Qual sintoma você sentiu?</Text>

            <View style={styles.opcoesContainer}>
                {symptomOptions.map((symptom) => {const isSelected = symptomName === symptom;

                return (
                    <TouchableOpacity key={symptom} style={[styles.opcaoButton,isSelected && styles.opcaoButtonSelected,]} onPress={() => setSymptomName(symptom)}>
                        <Text style={[styles.opcaoText,isSelected && styles.opcaoTextSelected,]}>{symptom}</Text>
                    </TouchableOpacity>
                );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

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

    opcoesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },

    opcaoButton: {
        backgroundColor: '#F1F5F9',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 22,
        paddingVertical: 11,
        paddingHorizontal: 15,
    },

    opcaoButtonSelected: {
        backgroundColor: '#6366F1',
        borderColor: '#6366F1',
    },

    opcaoText: {
        color: '#334155',
        fontSize: 15,
        fontWeight: '600',
    },

    opcaoTextSelected: {
        color: '#FFFFFF',
    },
});