import { IProduct } from '../../types';

export const initialState = JSON.parse(
  localStorage.getItem('shoppingBasket') as string
) || {
  products: [],
};

export type ActionType =
  | {
      type: 'ADD_TO_BASKET';
      payload: IProduct;
    }
  | {
      type: 'REMOVE_FROM_BASKET';
      payload: string;
    };

export type StateType = {
  products: Array<IProduct>;
};

export function shoppingBasketReducer(
  state: StateType,
  action: ActionType
): StateType {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    default: {
      throw new Error(`Unsupported action type at Home Reducer`);
    }
  }
}
