import { loginUser } from "../services/userService";
import { LoginResponse } from "../model/User";

type LoginParams = {
    email: string;
    password: string;
};

export async function loginControl({email,password}: LoginParams): Promise<LoginResponse> {
    
    if (!email || !password) {
        throw new Error("Preencha e-mail e senha.");
    }

    const response = await loginUser({
        email,
        password,
    });

    return response;
}