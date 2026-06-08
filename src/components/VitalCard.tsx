import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

type VitalCardProps = {
    titulo: string;
    valor: string;
    unidade: string;
    icon: string;
    cor: string;
};

export function VitalCard({titulo,valor,unidade,icon,cor}: VitalCardProps) {

    return (

        <View style={styles.vitalCard}>

            <FontAwesome5 name={icon} size={26} color={cor} />
            <Text style={styles.vitalTitulo}>{titulo}</Text>
            <Text style={styles.vitalValor}>{valor}</Text>
            <Text style={styles.vitalUnidade}>{unidade}</Text>

        </View>

    );
}

const styles = StyleSheet.create({

    vitalCard: {
        width: '32%',
        backgroundColor: 'white',
        borderRadius: 18,
        padding: 14,
        marginBottom: 14,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
    },

    vitalTitulo: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
    },

    vitalValor: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 8,
    },

    vitalUnidade: {
        color: '#777',
        marginTop: 4,
    }

});