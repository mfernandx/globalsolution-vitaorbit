import { getHealthRecordsByUserId } from "../services/healthRecordService";
import { enviaSystemAlerts } from "./systemAlertControl";
import { HealthRecord } from "../model/HealthRecord";
import { SystemAlert } from "../model/SystemAlert";

export async function carregarAlertasControl(userId: number): Promise<SystemAlert[]> {

    if (!userId) {
        throw new Error("Usuário logado não encontrado.");
    }

    const records: HealthRecord[] = await getHealthRecordsByUserId(userId);

    const latestRecord = records.length > 0 ? records[0] : null;

    const generatedAlerts = enviaSystemAlerts(latestRecord);

    return generatedAlerts;
}