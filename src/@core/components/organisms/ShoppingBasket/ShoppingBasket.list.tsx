import React from 'react';
import { cnj, createUseStyles } from '@core/utils/makeStyle';
import Flex from '../../atoms/Flex';
import useShoppingBasket from '../../../hooks/useShoppingBasket';
import { IProduct } from '../../../types';
import ShoppingBasketCard from '../ShoppingBasketCard';

const ShoppingBasketList: React.FC = () => {
  const classes = useStyles();
  const {
    state: { products },
    dispatch,
  } = useShoppingBasket();

  const removeFromBasketHandler = (product: IProduct) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: product.id });
  };

  return (
    <Flex className={cnj(classes.shoppingBasketRoot)}>
      {products.map((item: IProduct, index: number) => (
        <ShoppingBasketCard
          key={item.id}
          onClickAddRemoveFromBasket={removeFromBasketHandler}
          data={item}
          visibleDivider={index !== products?.length - 1}
        />
      ))}
    </Flex>
  );
};

const useStyles = createUseStyles(({ colors, media, sizes, radii }) => ({
  shoppingBasketRoot: {
    padding: sizes.sm,
    backgroundColor: colors.white,
    boxShadow: [[0, 4, 10, colors.black10]],
    borderRadius: radii.md,
  },

  [media.tablet]: {
    shoppingBasketRoot: {
      padding: sizes.md + sizes.sm,
    },
  },
}));

export default ShoppingBasketList;
