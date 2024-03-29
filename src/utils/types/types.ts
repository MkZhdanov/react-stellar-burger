export interface IUuid {
  key: string;
}

export interface IWsOptions {
  wsInit: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
}

export interface IRegister {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

export interface IUser {
  readonly email: string;
  readonly name: string;
  password?: string | null;
}

export interface ILogin {
  readonly email: string;
  readonly password: string;
}

export interface IResetPassword {
  readonly password: string;
  readonly token: string;
}

export interface IChangeUserInfo {
  readonly email: string;
  readonly name: string;
}
