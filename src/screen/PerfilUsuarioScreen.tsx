import { View, Text, StyleSheet} from "react-native";

export function PerfilUsuarioScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Perfil do Usuário</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        justifyContent: 'center',  
    },
    
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
    },
});