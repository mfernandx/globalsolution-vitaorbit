import { View, Text, StyleSheet} from "react-native";

export function RegistrosScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Registros</Text>
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