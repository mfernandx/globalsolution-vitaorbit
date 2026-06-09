import { HealthRecord } from "../model/HealthRecord";
import { createHealthRecord } from "../services/healthRecordService";

type SalvarMonitoramentoSinaisParams = {
    userId: number;
    heartRate: string;
    bloodPressure: string;
    bodyTemperature: string;
    oxygenSaturation: string;
    mood: string;
    hydrationLevel: string;
    sleepHours: string;
    notes: string;
};

export async function salvarMonitoramentoSinaisControl({userId,heartRate,bloodPressure,bodyTemperature,oxygenSaturation,mood,hydrationLevel,sleepHours,notes}: SalvarMonitoramentoSinaisParams): Promise<HealthRecord>{
    
    if (!userId) {
        throw new Error("Nenhum usuário logado encontrado.");
    }

    if (!heartRate || !bloodPressure || !bodyTemperature || !oxygenSaturation || !mood || !hydrationLevel || !sleepHours) {
        throw new Error("Preencha todos os sinais vitais.");
    }

    const healthRecord = {
        userId,
        heartRate: Number(heartRate),
        bloodPressure,
        bodyTemperature: Number(bodyTemperature.replace(",", ".")),
        oxygenSaturation: Number(oxygenSaturation),
        mood,
        hydrationLevel: Number(hydrationLevel.replace(",", ".")),
        sleepHours: Number(sleepHours.replace(",", ".")),
        notes,
    };

    const createdRecord = await createHealthRecord(healthRecord);

    return createdRecord;
}

