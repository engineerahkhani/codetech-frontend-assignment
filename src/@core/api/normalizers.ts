import { IProduct, IProductApi } from '../types';
import APP_CONFIG from '../constants/app-config';

const getProductNormalizer = (data: Array<IProductApi>): Array<IProduct> =>
  data.map(({ poster, price, orderLimitTime, ...rest }, index: number) => ({
    id: `${new Date().getTime()}__${index}`,
    poster: `${APP_CONFIG.apiBaseUrl}/${poster}`,
    priceWithUnit: `$ ${price} USD`,
    orderLimitTime: Math.ceil(orderLimitTime),
    price,
    ...rest,
  }));

export default { getProductNormalizer };
