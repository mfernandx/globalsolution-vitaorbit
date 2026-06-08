import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { User } from "../model/User";
import { getUserById } from "../services/userService";
import { useAuth } from "../context/AuthContext";

export function PerfilUsuarioScreen() {

    const { loggedUser } = useAuth();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    async function loadUserProfile() {
        try {
            if (!loggedUser?.userId) {
                Alert.alert('Erro', 'Nenhum usuário logado encontrado.');
                return;
            }

            const userData = await getUserById(loggedUser.userId);
            setUser(userData);

        } catch {
            Alert.alert('Erro', 'Não foi possível carregar o perfil.');

        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {loadUserProfile();}, []);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#6366F1" />
            </View>
        );
    }

    if (!user) {
        return (
            <View style={styles.container}>
                <Text>Usuário não encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Perfil do Usuário</Text>

            <View style={styles.infoBox}>
                <Text>ID: {user.userId}</Text>
                <Text>Nome: {user.fullName}</Text>
                <Text>E-mail: {user.email}</Text>
                <Text>Data de nascimento: {user.birthDate}</Text>
                <Text>Gênero: {user.gender}</Text>
                <Text>Descrição: {user.userDescription}</Text>
                <Text>Localização: {user.currentLocation}</Text>
                <Text>Telefone: {user.phoneNumber}</Text>
                <Text>Contato de emergência: {user.emergencyContact}</Text>
                <Text>Cadastrado em: {user.createdAt}</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#F8F9FC',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
    },

    infoBox: {
        gap: 10,
    },

});