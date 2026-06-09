import { getUserById } from "../services/userService";
import { User } from "../model/User";

export async function carregarPerfilUsuarioControl(userId: number): Promise<User> {

    if (!userId) {
        throw new Error("Nenhum usuário logado encontrado.");
    }

    const userData = await getUserById(userId);

    return userData;
}