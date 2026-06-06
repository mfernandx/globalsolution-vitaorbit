import { useState } from 'react';
import {ActivityIndicator,ImageBackground,ScrollView,StyleSheet,Text,TextInput,TouchableOpacity,View, Image} from 'react-native';
import { Gender } from '../model/User';

const genderOptions: Gender[] = [
  'Feminino',
  'Masculino',
  'Não binário',
  'Prefiro não informar',
];

export function CadastroScreen() {
  
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');const [gender, setGender] = useState<Gender>('Prefiro não informar');
    const [userDescription, setUserDescription] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [isLoading] = useState(false);


    return (

    <ImageBackground source={require('../../assets/background-login.png')} style={styles.background} resizeMode="cover">
    
    <View style={styles.conteudo}>

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.header}>
                <Image source={require('../../assets/logo-cadastro-vitaorbit.png')} style={styles.logo} resizeMode="contain" />
            </View>

        
            <View style={styles.form}>
                

                <TextInput style={styles.input} placeholder="Nome completo" placeholderTextColor="#B8C1D1" value={fullName} onChangeText={setFullName}/>

                <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#B8C1D1" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address"/>

                <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#B8C1D1" value={password} onChangeText={setPassword} secureTextEntry/>

                <TextInput style={styles.input} placeholder="Data de nascimento" placeholderTextColor="#B8C1D1" value={birthDate} onChangeText={setBirthDate}/>

                <Text style={styles.tituloGenero}>Gênero</Text>

                <View style={styles.generoContainer}>
                    {genderOptions.map((option) => (
                        <TouchableOpacity key={option} style={[styles.generoButton,gender === option && styles.generoButtonSelected,]} onPress={() => setGender(option)}>
                        <Text style={[styles.generoButtonText,gender === option && styles.generoButtonTextSelected,]}>
                            {option}
                        </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TextInput style={[styles.input, styles.textArea]} placeholder="Descrição do usuário" placeholderTextColor="#B8C1D1" value={userDescription} onChangeText={setUserDescription} multiline/>

                <TextInput style={styles.input} placeholder="Localização atual" placeholderTextColor="#B8C1D1" value={currentLocation} onChangeText={setCurrentLocation}/>

                <TextInput style={styles.input} placeholder="Telefone" placeholderTextColor="#B8C1D1" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad"/>

                <TextInput style={styles.input} placeholder="Contato de emergência" placeholderTextColor="#B8C1D1" value={emergencyContact} onChangeText={setEmergencyContact} keyboardType="phone-pad"/>

                <TouchableOpacity style={styles.buttonCadastro} >
                    {isLoading ? (<ActivityIndicator color="#FFFFFF"/>) : (<Text style={styles.buttonCadastroText}>Cadastrar</Text>)}
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonLoginText}>Já tenho uma conta</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>

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
        paddingHorizontal: 24,
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
        paddingBottom: 48,
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

    textArea: {
        minHeight: 92,
        textAlignVertical: 'top',
    },

    tituloGenero: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    generoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 18,
    },

    generoButton: {
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.35)',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },

    generoButtonSelected: {
        backgroundColor: '#00D4AA',
        borderColor: '#00D4AA',
    },

    generoButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },

    generoButtonTextSelected: {
        color: '#0D1B2A',
    },

    buttonCadastro: {
        backgroundColor: '#5C5DD2',
        padding: 16,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 18,
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
    }

});