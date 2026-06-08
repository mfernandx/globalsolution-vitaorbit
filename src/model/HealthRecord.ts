interface HealthRecord {
    healthRecordId: number;
    userId: number;
    heartRate: string;
    bloodPressure: string;
    bodyTemperature: string;
    oxygenSaturation: string;
    mood: string;
    hydrationLevel: string;
    sleepHours: string;
    notes?: string;
    riskClassification: string;
    recordedAt: string;
}

interface CreateHealthRecordRequest {
    userId: number;
    heartRate: number;
    bloodPressure: string;
    bodyTemperature: number;
    oxygenSaturation: number;
    mood: string;
    hydrationLevel: number;
    sleepHours: number;
    notes: string;
}

export {HealthRecord,CreateHealthRecordRequest}