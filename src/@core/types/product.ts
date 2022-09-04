export interface IProductApi {
  name: string;
  price: string;
  poster: string;
  orderLimitTime: number;
}

export interface IProduct extends IProductApi {
  id: string;
  priceWithUnit: string;
}
