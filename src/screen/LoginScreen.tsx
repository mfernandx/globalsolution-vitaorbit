import { useState } from 'react';
import {ActivityIndicator,ImageBackground,StyleSheet,Text,TextInput,TouchableOpacity,View,Image} from 'react-native';


export function LoginScreen() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading] = useState(false);


    return (
        <ImageBackground source={require('../../assets/background-login.png')} style={styles.background} resizeMode="cover">
        
        <View style={styles.conteudo}>

            <View style={styles.header}>
                <Image source={require('../../assets/logo-login-vitaorbit.png')} style={styles.logo} resizeMode="contain" />
            </View>

            <View style={styles.form}>

                <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#B8C1D1" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address"/>

                <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#B8C1D1" value={password} onChangeText={setPassword} secureTextEntry/>

                <TouchableOpacity style={styles.buttonLogin} >
                    {isLoading ? (<ActivityIndicator color="#FFFFFF" /> ) : (<Text style={styles.buttonLoginText}>Entrar</Text>)}
                </TouchableOpacity>

                <TouchableOpacity style ={styles.buttonCadastro}>
                    <Text style={styles.buttonCadastroText}>Ainda não tenho uma conta</Text>
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

    header: {
        marginTop: 100,
        alignItems: 'center',
    },

    logo: {
        width: 350,
        height: 180,
        alignSelf: "center",
        marginTop: 30,
    },

    form: {
        marginBottom: 210,
    },

    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.28)',
        color: '#FFFFFF',
        borderRadius: 18,
        padding: 16,
        fontSize: 16,
        marginBottom: 14,
    },

    buttonLogin: {
        backgroundColor: '#6464D9',
        borderRadius: 28,
        padding: 17,
        alignItems: 'center',
        marginTop: 18,
        marginBottom: 14,
    },

    buttonLoginText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
    },

    buttonCadastro: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        padding: 16,
        borderRadius: 25,
        alignItems: 'center',
    },

    buttonCadastroText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});