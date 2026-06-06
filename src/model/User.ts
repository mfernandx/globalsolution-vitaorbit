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

type Gender = 'Feminino' | 'Masculino' | 'Não binário' | 'Prefiro não informar';

export { User,Gender};
