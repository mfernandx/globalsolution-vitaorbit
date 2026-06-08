import { api } from './api';
import {CreateSymptomRecordRequest,SymptomRecord} from '../model/SymptomRecord';

export async function createSymptomRecord(data: CreateSymptomRecordRequest): Promise<SymptomRecord> {
    const response = await api.post<SymptomRecord>('/symptomrecord', data);
    return response.data;
}

export async function getSymptomRecordsByUserId(userId: number) : Promise<SymptomRecord[]> {
    const response = await api.get<SymptomRecord[]>(`/symptomrecord/user/${userId}`);
    return response.data;
}
