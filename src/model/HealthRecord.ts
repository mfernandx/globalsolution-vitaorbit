interface HealthRecord {
    healthRecordId: number;
    userId: number;
    heartRate: number;
    bloodPressure: string;
    bodyTemperature: number;
    oxygenSaturation: number;
    mood: string;
    hydrationLevel: number;
    sleepHours: number;
    notes?: string;
    riskClassification: string;
    registeredAt: string;
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