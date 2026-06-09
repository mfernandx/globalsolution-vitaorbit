import { getHealthRecordsByUserId } from "../services/healthRecordService";
import { HealthRecord } from "../model/HealthRecord";

export async function carregarUltimoRegistroControl(userId: number): Promise<HealthRecord | null> {
    
    if (!userId) {
        throw new Error("Usuário logado não encontrado.");
    }

    const registros: HealthRecord[] = await getHealthRecordsByUserId(userId);

    if (registros.length === 0) {
        return null;
    }

    return registros[0];
}
