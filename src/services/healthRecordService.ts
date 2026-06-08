import { api } from './api';
import {CreateHealthRecordRequest,HealthRecord} from '../model/HealthRecord';

export async function createHealthRecord(data: CreateHealthRecordRequest): Promise<HealthRecord> {
    const response = await api.post<HealthRecord>('/healthrecord', data);
    return response.data;
}

export async function getHealthRecordsByUserId(userId: number): Promise<HealthRecord[]> {
    const response = await api.get<HealthRecord[]>(`/healthrecord/user/${userId}`);
    return response.data;
}