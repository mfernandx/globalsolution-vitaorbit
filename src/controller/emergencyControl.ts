import { createEmergency } from "../services/emergencyService";

type RequestEmergencyParams = {
    userId: number;
    location: string;
    message: string;
};

export async function requestEmergencyControl({userId,location,message}: RequestEmergencyParams) {
    
    if (!userId) {
        throw new Error("Usuário logado não encontrado.");
    }

    if (!location || !message) {
        throw new Error("Informe uma mensagem e sua localização.");
    }

    const emergencyRequest = {
        userId,
        location,
        message,
    };

    return await createEmergency(emergencyRequest);
}