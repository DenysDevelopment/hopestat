export interface IUser {
  login: string;
  password: string;
}

export interface IUserResponse {
  id: number;
  full_name: string;
  login: string;
  password: string;
  token: string;
  document_url: string;
  avatar_url: string;
  logged: string;
  user_lvl: 1 | 2 | 3;
}
