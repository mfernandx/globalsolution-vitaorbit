import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Switch, Text, View, TouchableOpacity} from "react-native";
import { User } from "../model/User";
import { useAuth } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { UserInfoCard } from '../components/UserInfoCard';
import { atualizarCampoUsuarioControl, carregarPerfilUsuarioControl, deletarContaUsuarioControl, EditUserField } from "../controller/profileUserControl";
import { EditModal } from "../components/EditModal";

export function PerfilUsuarioScreen({ navigation }: any) {

    const { loggedUser, signOut } = useAuth();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [offlineMode, setOfflineMode] = useState(true);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editField, setEditField] = useState<EditUserField | null>(null);
    const [editLabel, setEditLabel] = useState("");
    const [editValue, setEditValue] = useState("");
  
    async function carregaPerfilUsuario() {

        try {
            const userData = await carregarPerfilUsuarioControl(loggedUser?.userId ?? 0);

            setUser(userData);

        } catch (error: any) {
            Alert.alert("Erro",error.message || "Não foi possível carregar o perfil.");

        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {carregaPerfilUsuario();}, []);


    async function salvarEdicao() {
        try {
            if (!editField) return;

            const response = await atualizarCampoUsuarioControl(loggedUser?.userId ?? 0,editField,editValue);

            Alert.alert("Sucesso", response);

            fecharModal();
            carregaPerfilUsuario();

        } catch (error: any) {
            const apiMessage = error.response?.data;

            Alert.alert("Erro ao atualizar",typeof apiMessage === "string" ? apiMessage : error.message || "Não foi possível atualizar o campo.");
        }
    }

    async function deletarContaUsuario() {
        try {
            const response = await deletarContaUsuarioControl(loggedUser?.userId ?? 0);

            Alert.alert("Conta excluída", response);

            signOut();

            navigation.navigate("Inicio");
            
        } catch (error: any) {
            const apiMessage = error.response?.data;

            Alert.alert("Erro ao excluir conta",typeof apiMessage === "string" ? apiMessage : error.message || "Não foi possível excluir a conta.");
        }
    }

    function confirmarExclusaoConta() {
        Alert.alert("Excluir conta","Tem certeza que deseja apagar sua conta? Essa ação não poderá ser desfeita.",
            [
                {
                    text: "Cancelar",
                },
                {
                    text: "Excluir",
                    onPress: deletarContaUsuario,
                },
            ]
        );
    }

    function abrirModal(field: EditUserField, label: string, currentValue: string) {
        setEditField(field);
        setEditLabel(label);
        setEditValue(currentValue);
        setEditModalVisible(true);
    }

    function fecharModal() {
        setEditModalVisible(false);
        setEditField(null);
        setEditLabel("");
        setEditValue("");
    }

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#6366F1" />
            </View>
        );
    }

    if (!user) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Usuário não encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitulo}>Meu perfil</Text>

                <View style={styles.userArea}>
                    <View style={styles.avatar}>
                        <Ionicons name="person" size={62} color="#FFFFFF" />
                    </View>

                    <View style={styles.userTextArea}>
                        <Text style={styles.userNome}>{user.fullName}</Text>
                        <Text style={styles.userDescricao}>{user.userDescription}</Text>
                        <Text style={styles.userId}>ID: ORB-{user.userId}</Text>
                    </View>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.conteudo}>
                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Informações</Text>

                    <UserInfoCard label="Gênero" value={user.gender} />
                    <UserInfoCard label="Nascimento" value={new Date(user.birthDate).toLocaleDateString('pt-BR')} />
                    <UserInfoCard label="Localização atual" value={user.currentLocation} onEdit={() => abrirModal("currentLocation", "Localização atual", user.currentLocation)}/>
                    <UserInfoCard label="Telefone" value={user.phoneNumber} onEdit={() => abrirModal("phoneNumber", "Telefone", user.phoneNumber)}/>
                    <UserInfoCard label="Contato de emergência" value={user.emergencyContact} onEdit={() => abrirModal("emergencyContact", "Contato de emergência", user.emergencyContact)}/>
                    <UserInfoCard label="E-mail" value={user.email} isLast onEdit={() => abrirModal("email", "E-mail", user.email)}/>

                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Conectividade</Text>

                    <View style={styles.conectividadeConteudo}>
                        <View>
                            <Text style={styles.conectividadeTitulo}>Modo offline</Text>

                            <Text style={styles.conectividadeDescricao}>Os dados serão sincronizados quando a conexão estiver disponível.</Text>
                        </View>

                        <View style={styles.switchArea}>
                            <Switch value={offlineMode} onValueChange={setOfflineMode} trackColor={{false: '#D1D5DB',true: '#00D4AA'}}thumbColor="#FFFFFF"/>
                        </View>
                    </View>
                </View>

                <View style={styles.cardExcluirConta}>

                    <TouchableOpacity style={styles.buttonExcluirConta} onPress={confirmarExclusaoConta}>
                        <Ionicons name="trash-outline" size={22} color="#FFFFFF" />
                        <Text style={styles.buttonTextExcluirConta}>Excluir minha conta</Text>
                    </TouchableOpacity>

                    <Text style={styles.cardExcluirContaTexto}>Ao excluir sua conta, seus dados serão removidos permanentemente do sistema.</Text>

                </View>

            </ScrollView>

            <EditModal visible={editModalVisible} title={`Alterar ${editLabel}`} value={editValue} onChangeText={setEditValue} onCancel={fecharModal} onSave={salvarEdicao}
                keyboardType={editField === "email" ? "email-address" : editField === "phoneNumber" || editField === "emergencyContact" ? "phone-pad" : "default"}/>

        </View>
  );

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#091426',
    },

    loadingContainer: {
        flex: 1,
        backgroundColor: '#F8F9FC',
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        backgroundColor: '#091426',
        paddingHorizontal: 24,
        paddingTop: 38,
        paddingBottom: 36,
    },

    headerTitulo: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 28,
    },

    userArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatar: {
        width: 106,
        height: 106,
        borderRadius: 53,
        backgroundColor: '#6366F1',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },

    userTextArea: {
        flex: 1,
    },

    userNome: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
    },

    userDescricao: {
        color: '#CBD5E1',
        fontSize: 17,
        fontWeight: '600',
        marginTop: 8,
    },

    userId: {
        color: '#CBD5E1',
        fontSize: 16,
        marginTop: 8,
    },

    conteudo: {
        backgroundColor: '#F8F9FC',
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        padding: 24,
        paddingBottom: 40,
    },

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
        color: '#111827',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 18,
    },

    conectividadeConteudo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
    },

    conectividadeTitulo: {
        color: '#111827',
        fontSize: 18,
        fontWeight: '600',
    },

    conectividadeDescricao: {
        color: '#64748B',
        fontSize: 15,
        lineHeight: 22,
        marginTop: 8,
        maxWidth: 230,
    },

    switchArea: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardExcluirConta: {
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 4,
    },

    cardExcluirContaTexto: {
        color: "#64748B",
        fontSize: 15,
        lineHeight: 22,
        marginTop: 18,
        textAlign: 'center',
    },

    buttonExcluirConta: {
        backgroundColor: "#FF5252",
        borderRadius: 16,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
    },

    buttonTextExcluirConta: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },

});