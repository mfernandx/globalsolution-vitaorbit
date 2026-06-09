import { api } from "./api";
import { CreateEmergencyRequest, Emergency } from "../model/Emergency";

export async function createEmergency(data: CreateEmergencyRequest): Promise<Emergency> {
    const response = await api.post<Emergency>("/emergency", data);
    return response.data;
}