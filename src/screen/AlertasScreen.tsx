import { View, Text, StyleSheet} from "react-native";

export function AlertasScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Alertas</Text>
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