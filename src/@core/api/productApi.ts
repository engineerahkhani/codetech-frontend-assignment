import request from '../utils/request';
import END_POINTS from '../constants/endpoints';
import { IProductApi, IResponse } from '../types';
import normalizers from './normalizers';

const getProducts = async () => {
  const url = `${END_POINTS.products}`;
  const { data } = await request.get<IResponse<IProductApi>>(url);
  return normalizers.getProductNormalizer(data?.data);
};

export { getProducts };
