import React from 'react';
import { cnj, createUseStyles } from '@core/utils/makeStyle';
import Flex from '../../atoms/Flex';
import EmptyShoppingBasket from './ShoppingBasket.empty';
import useShoppingBasket from '../../../hooks/useShoppingBasket';
import ShoppingBasketList from './ShoppingBasket.list';

const ShoppingBasket: React.FC = () => {
  const classes = useStyles();
  const { state } = useShoppingBasket();
  const isEmpty = state.products.length === 0;

  return (
    <Flex className={cnj(classes.shoppingBasketRoot)}>
      {isEmpty ? <EmptyShoppingBasket /> : <ShoppingBasketList />}
    </Flex>
  );
};

const useStyles = createUseStyles(({ media, sizes }) => ({
  shoppingBasketRoot: {
    padding: [0, 0, sizes.xs, 0],
  },

  [media.tablet]: {
    shoppingBasketRoot: {
      padding: [[sizes.sm, 0, 0, sizes.sm + sizes.md]],
      minWidth: 337,
    },
  },
}));

export default ShoppingBasket;
