import React, {createContext, useReducer, Dispatch, useEffect} from 'react';
import {
  ActionType,
  initialState,
  shoppingBasketReducer,
  StateType,
} from './shoppingBasket.reducer';

export const ShoppingBasketContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

type Props = {
  children?: React.ReactNode;
};

const ShoppingBasketProvider: React.FC = ({ children }: Props) => {
  const [state, dispatch] = useReducer(shoppingBasketReducer, initialState);

  useEffect(() => {
    localStorage.setItem("shoppingBasket", JSON.stringify(state));
  }, [state]);

  return (
    <ShoppingBasketContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingBasketContext.Provider>
  );
};

export default ShoppingBasketProvider;
