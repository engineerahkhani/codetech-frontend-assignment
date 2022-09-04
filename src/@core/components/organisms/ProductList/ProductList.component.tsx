import React, { useRef } from 'react';
import Flex from '@core/components/atoms/Flex';
import ProductCard from '@core/components/organisms/ProductCard';
import products from '@core/mocks/products.json';
import { useQuery as useReactQuery } from 'react-query';
import { getProducts } from '@core/api/productApi';
import { createUseStyles } from '../../../utils/makeStyle';
import useShoppingBasket from '../../../hooks/useShoppingBasket';
import { IProduct } from '../../../types';
import ProductListSkeleton from './ProductList.skeleton';

const ProductList = () => {
  const classes = useStyles();
  const { data, isLoading } = useReactQuery(['products'], getProducts);
  const {
    state: { products },
    dispatch,
  } = useShoppingBasket();

  const addToBasketHandler = (product: IProduct) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: product });
  };

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  return (
    <Flex className={classes.listWrapper}>
      {data?.map((product) => (
        <ProductCard
          disabledAddToCard={products.map((i) => i.id).includes(product.id)}
          key={product.id}
          onClickAddToBasket={addToBasketHandler}
          className={classes.productCardWrapper}
          data={product}
        />
      ))}
    </Flex>
  );
};

const useStyles = createUseStyles(({ media, radii, sizes }) => ({
  listWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productCardWrapper: {
    display: 'flex',
    flexGrow: 0,
    flexBasis: '50%',
    flexShrink: 0,
    borderRadius: radii.sm,
    padding: sizes.xs,
  },
  [media.tablet]: {
    listWrapper: {},
    ProductListRoot: {
      flexDirection: 'row',
    },
    productCardWrapper: {
      flexBasis: '33.33%',
      padding: sizes.sm,
    },
  },
}));
export default ProductList;
