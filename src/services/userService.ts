import { api } from './api';
import { CreateUserRequest, LoginRequest, LoginResponse, User } from '../model/User';

export async function createUser(data: CreateUserRequest): Promise<User> {
    const response = await api.post<User>('/user', data);
    return response.data;
}

export async function loginUser(data: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/user/login', data);
    return response.data;
}

export async function getUserById(userId: number): Promise<User> {
    const response = await api.get<User>(`/user/${userId}`);
    return response.data;
}

export async function deleteUserById(userId: number): Promise<string> {
    const response = await api.delete<string>(`/user/${userId}`);
    return response.data;
}