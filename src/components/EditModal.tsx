import React from "react";
import {Modal,View,Text,TextInput,TouchableOpacity,StyleSheet,KeyboardTypeOptions} from "react-native";

type EditModalProps = {
    visible: boolean;
    title: string;
    value: string;
    onChangeText: (text: string) => void;
    onCancel: () => void;
    onSave: () => void;
    keyboardType?: KeyboardTypeOptions;
};

export function EditModal({visible,title,value,onChangeText,onCancel,onSave,keyboardType = "default",}: EditModalProps) {
    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
            <View style={styles.overlay}>
                <View style={styles.card}>
                    <Text style={styles.titulo}>{title}</Text>

                    <TextInput style={styles.input} value={value} onChangeText={onChangeText} keyboardType={keyboardType}/>

                    <View style={styles.acoes}>
                        <TouchableOpacity style={styles.buttonCancelar} onPress={onCancel}>
                            <Text style={styles.cancelarText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonSalvar} onPress={onSave}>
                            <Text style={styles.salvarText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.55)",
        justifyContent: "center",
        padding: 24,
    },

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        padding: 22,
    },

    titulo: {
        color: "#111827",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 18,
    },

    input: {
        backgroundColor: "#F1F5F9",
        borderRadius: 16,
        padding: 16,
        fontSize: 16,
        color: "#111827",
        marginBottom: 18,
    },

    acoes: {
        flexDirection: "row",
        gap: 12,
    },

    buttonCancelar: {
        flex: 1,
        backgroundColor: "#E5E7EB",
        borderRadius: 14,
        padding: 14,
        alignItems: "center",
    },

    buttonSalvar: {
        flex: 1,
        backgroundColor: "#6366F1",
        borderRadius: 14,
        padding: 14,
        alignItems: "center",
    },

    cancelarText: {
        color: "#111827",
        fontWeight: "bold",
    },

    salvarText: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
});