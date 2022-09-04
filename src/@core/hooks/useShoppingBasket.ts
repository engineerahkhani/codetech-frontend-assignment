import React, { Dispatch } from 'react';
import { ShoppingBasketContext } from '@core/contexts/ShoppingBasket/shoppingBasket.provider';
import {
  ActionType,
  StateType,
} from '../contexts/ShoppingBasket/shoppingBasket.reducer';

type Type = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};

const useShoppingBasket = (): Type =>
  React.useContext(ShoppingBasketContext) as any;

export default useShoppingBasket;
