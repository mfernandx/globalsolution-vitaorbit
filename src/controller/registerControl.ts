import { createUser } from "../services/userService";
import { Gender } from "../model/User";

type CadastroParams = {
    fullName: string;
    email: string;
    password: string;
    birthDate: string;
    gender: Gender;
    userDescription: string;
    currentLocation: string;
    phoneNumber: string;
    emergencyContact: string;
};

export async function cadastrarUsuarioControl({fullName,email,password,birthDate,gender,userDescription,currentLocation,phoneNumber,emergencyContact}: CadastroParams) {
    
    if (!fullName || !email || !password || !birthDate || !gender || !userDescription || !currentLocation || !phoneNumber || !emergencyContact) {
        throw new Error("Preencha todos os campos.");
    }

    const createdUser = await createUser({
        fullName,
        email,
        password,
        birthDate,
        gender,
        userDescription,
        currentLocation,
        phoneNumber,
        emergencyContact,
    });

    return createdUser;
}