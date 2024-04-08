export interface IMainOrder {
  _id: string;
  owner: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
}

export interface IOrder extends IMainOrder {
  ingredients: string[];
}
