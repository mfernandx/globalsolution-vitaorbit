import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export function Header() {
    return (

        <View style={styles.header}>

            <Text style={styles.titulo}>Olá!👋</Text>

            <View style={styles.tituloCompleto}>
                <Text style={styles.subtitulo}>Seja bem-vindo ao </Text>
                <Image source={require('../../assets/logo-semslogan.png')} style={styles.logo} resizeMode="contain" />
            </View>
                

            <View style={styles.conexaoCard}>
                <View style={styles.conexaoLeft}>

                    <MaterialCommunityIcons name="satellite-variant" size={28} color={'#00D4AA'}/>

                    <View>
                        <Text style={styles.conexaoTitulo}>Conexão via satélite</Text>
                        <Text style={styles.conexaoStatus}>Sinal forte</Text>
                    </View>

                </View>

                <Ionicons name="cellular" size={28} color={'#00D4AA'} />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#091426',
        paddingHorizontal: 24,
        paddingBottom: 28,
    },

    titulo: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 40,
    },

    subtitulo: {
        color: 'white',
        fontSize: 20,
        marginTop: 18,
    },

    logo: {
        width: 170,
        marginTop: -53,
    },


    tituloCompleto: {
        flexDirection: 'row',
        marginBottom: -45
    },

    conexaoCard: {
        backgroundColor: '#132547',
        borderRadius: 22,
        padding: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    conexaoLeft: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },

    conexaoTitulo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },

    conexaoStatus: {
        color: '#00D4AA',
        marginTop: 4,
    },
});