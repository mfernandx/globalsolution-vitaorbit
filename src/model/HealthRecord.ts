interface HealthRecord {
  heartRate: string;
  bloodPressure: string;
  bodyTemperature: string;
  oxygenSaturation: string;
  mood: string;
  hydrationLevel: string;
  sleepHours: string;
  notes?: string;
  recordedAt: string;
}

export {HealthRecord}