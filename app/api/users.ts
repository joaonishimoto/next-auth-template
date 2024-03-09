export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  points: number;
}

// Declare os usuários
export const Users: User[] = [
  {
    id: "1",
    email: "joao.oliveira@engetak.com",
    password: "12345",
    name: "João Nishimoto",
    role: "admin",
    points: 1
  },
  {
    id: "2",
    email: "gustavo.miranda@engetak.com",
    password: "12345",
    name: "Gustavo Miranda",
    role: "user",
    points: 1
  },
  // Adicione mais usuários conforme necessário
];