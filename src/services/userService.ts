import { api } from './api';
import { CreateUserRequest, User } from '../model/User';

export async function createUser(data: CreateUserRequest): Promise<User> {
    const response = await api.post<User>('/user', data);
    return response.data;
}