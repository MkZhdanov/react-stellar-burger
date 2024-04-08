export interface IUuid {
  key: string;
}

export interface IIngredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
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

export interface IAuthSuccess {
  readonly success: boolean;
  readonly accessToken: string;
  readonly refreshToken: string;
  user: IUser;
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
  email?: string;
  name?: string;
  password?: string;
  code?: string;
}

export interface IOwner {
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
}

export interface IMyOrderResponse {
  ingredients: IIngredient[];
  _id: string;
  owner: IOwner;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  price: number;
}

export interface IOptions {
  method: string;
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
  body: string;
}

export interface IUpdateIngredientOrder {
  firstKey: string;
  secondKey: string;
}
