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
const useStyles = createUseStyles(({ media, sizes }) => ({
  homeRoot: {
    display: 'flex',
    flexDirection: 'column-reverse',
    padding: sizes.sm,
  },
  [media.tablet]: {
    homeRoot: {
      flexDirection: 'row',
      padding: sizes.lg,
    },
  },
}));

export default Home;
