import { ImageBackground, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function InicioScreen({navigation,}: any) {

    return (
        
        <ImageBackground source={require('../../assets/background-telainicial.png')} style={styles.background} resizeMode="cover">
        
        <View style={styles.conteudo}>
            
            <Image source={require("../../assets/logo-app-vitaorbit.png")} style={styles.logo} resizeMode="contain"/>
            
            <View style={styles.opcoes}>

                <TouchableOpacity style={styles.buttonCadastro} onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.buttonCadastroText}>Começar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.buttonLoginText}>Já tenho uma conta</Text>
                </TouchableOpacity>

            </View>

        </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    conteudo: {
        flex: 1,
        padding: 24,
        justifyContent: 'space-between',
    },
  
    logo: {
        width: 340,
        height: 180,
        alignSelf: "center",
        marginTop: 40,
    },
  
    opcoes: {
        marginBottom: 48,
    },

    buttonCadastro: {
        backgroundColor: '#5C5DD2',
        padding: 16,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 14,
    },

    buttonCadastroText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    buttonLogin: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        padding: 16,
        borderRadius: 25,
        alignItems: 'center',
    },

    buttonLoginText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

});