import { getHealthRecordsByUserId } from "../services/healthRecordService";
import { getSymptomRecordsByUserId } from "../services/symptomRecordService";

export type RegisterItem = {
    id: string;
    type: "health" | "symptom";
    title: string;
    subtitle: string;
    date: string;
    details: string[];
};

export async function carregarHistoricoControl(userId: number): Promise<RegisterItem[]> {

    if (!userId) {
        throw new Error("Usuário logado não encontrado.");
    }

    const healthRecords = await getHealthRecordsByUserId(userId);
    const symptomRecords = await getSymptomRecordsByUserId(userId);

    const healthItems: RegisterItem[] = healthRecords.map((record: any) => ({
        id: `health-${record.healthRecordId}`,
        type: "health",
        title: "Registro de sinais vitais",
        subtitle: `Risco: ${record.riskClassification}`,
        date: record.registeredAt,
        details: [
            `Batimentos: ${record.heartRate} bpm`,
            `Pressão: ${record.bloodPressure} mmHg`,
            `Temperatura: ${record.bodyTemperature} °C`,
            `Oxigenação: ${record.oxygenSaturation}%`,
            `Hidratação: ${record.hydrationLevel} L`,
            `Sono: ${record.sleepHours} horas`,
        ],
    }));

    const symptomItems: RegisterItem[] = symptomRecords.map((record: any) => ({
        id: `symptom-${record.symptomRecordId}`,
        type: "symptom",
        title: "Registro de sintoma",
        subtitle: record.symptomName,
        date: record.registeredAt,
        details: [
            `Intensidade: ${record.intensity}/10`,
            `Frequência: ${record.frequency}`,
            `Descrição: ${record.description}`,
        ],
    }));

    const allItems = [...healthItems, ...symptomItems];

    return allItems;
}