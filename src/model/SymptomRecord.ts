interface SymptomRecord {
    symptomRecordId: number;
    userId: number;
    symptomName: string;
    intensity: number;
    frequency: string;
    startedAt: string;
    description: string;
    riskClassification: string;
    registeredAt: string;
}

interface CreateSymptomRecordRequest {
    userId: number;
    symptomName: string;
    intensity: number;
    frequency: string;
    startedAt: string;
    description: string;
}



export {SymptomRecord,CreateSymptomRecordRequest}