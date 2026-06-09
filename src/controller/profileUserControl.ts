import { deleteUserById, getUserById, updateUserEmail, updateUserEmergencyContact, updateUserLocation, updateUserPhone } from "../services/userService";
import { User } from "../model/User";

export type EditUserField = "email" | "currentLocation" | "phoneNumber" | "emergencyContact";


export async function carregarPerfilUsuarioControl(userId: number): Promise<User> {

    if (!userId) {
        throw new Error("Nenhum usuário logado encontrado.");
    }

    const userData = await getUserById(userId);

    return userData;
}

export async function atualizarCampoUsuarioControl(userId: number,field: EditUserField,value: string): Promise<string> {

    if (!userId) {
        throw new Error("Nenhum usuário logado encontrado.");
    }

    if (!value.trim()) {
        throw new Error("O campo não pode ficar vazio.");
    }

    if (field === "email") {
        return await updateUserEmail(userId, value);
    }

    if (field === "currentLocation") {
        return await updateUserLocation(userId, value);
    }

    if (field === "phoneNumber") {
        return await updateUserPhone(userId, value);
    }

    return await updateUserEmergencyContact(userId, value);
}


export async function deletarContaUsuarioControl(userId: number): Promise<string> {
    if (!userId) {
        throw new Error("Nenhum usuário logado encontrado.");
    }

    const response = await deleteUserById(userId);

    return response;
}