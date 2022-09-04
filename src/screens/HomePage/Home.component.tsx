import React from 'react';
import Flex from '@core/components/atoms/Flex';
import { createUseStyles } from '@core/utils/makeStyle';
import ShoppingBasket from '@core/components/organisms/ShoppingBasket';
import ProductList from '../../@core/components/organisms/ProductList';
const Home = () => {
  const classes = useStyles();

  return (
    <Flex className={classes.homeRoot}>
      <ProductList />
      <ShoppingBasket />
    </Flex>
  );
};
const useStyles = createUseStyles(({ media, radii, sizes }) => ({
  homeRoot: {
    display: 'flex',
    flexDirection: 'row',
    padding: sizes.lg,
  },
}));

export default Home;
