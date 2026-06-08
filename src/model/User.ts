
type Gender = 'Feminino' | 'Masculino' | 'Não binário' | 'Prefiro não informar';

interface User {
    userId: string;
    fullName: string;
    email: string;
    password: string;
    birthDate: string;
    gender: Gender;
    userDescription: string;
    currentLocation: string;
    phoneNumber: string;
    emergencyContact?: string;
    createdAt: string;
}

interface CreateUserRequest {
  fullName: string;
  email: string;
  password: string;
  birthDate: string;
  gender: Gender;
  userDescription: string;
  currentLocation: string;
  phoneNumber: string;
  emergencyContact: string;
}

export { User,Gender, CreateUserRequest};
