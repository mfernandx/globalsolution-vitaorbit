import { createSymptomRecord } from "../services/symptomRecordService";
import { SymptomRecord } from "../model/SymptomRecord";

type SalvarMonitoramentoSintomasParams = {
    userId: number;
    symptomName: string;
    intensity: string;
    frequency: string;
    description: string;
    startedAt: string;
};

export async function salvarMonitoramentoSintomasControl({userId, symptomName, intensity, frequency, description, startedAt}: SalvarMonitoramentoSintomasParams): Promise<SymptomRecord> {
    
    if (!userId) {
        throw new Error("Nenhum usuário logado encontrado.");
    }

    if (!symptomName || !intensity || !frequency || !description || !startedAt) {
        throw new Error("Preencha sintoma, frequência, descrição e data de início.");
    }

    const intensityNumber = Number(intensity);

    if (Number.isNaN(intensityNumber)) {
        throw new Error("A intensidade deve ser um número.");
    }

    if (intensityNumber < 0 || intensityNumber > 10) {
        throw new Error("A intensidade deve ser um número entre 0 e 10.");
    }

    const symptomRecord = {
        userId,
        symptomName,
        intensity: intensityNumber,
        frequency,
        startedAt,
        description,
    };

    const createdRecord = await createSymptomRecord(symptomRecord);

    return createdRecord;
}