export interface IUser {
  login: string;
  password: string;
}
export interface IUserResponse {
  login: string;
  token: string;
  accessToken: string;
}

export interface IUserState {
  email?: string;
  isAdmin: boolean;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IInitialState {
  user: IUserState | null;
  isLoading: boolean;
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser & { isAdmin: boolean };
}
