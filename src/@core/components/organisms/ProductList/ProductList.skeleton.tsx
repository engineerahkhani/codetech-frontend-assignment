import React, { useRef } from 'react';
import Flex from '@core/components/atoms/Flex';
import { createUseStyles } from '../../../utils/makeStyle';
import ProductCardSkeleton from '../ProductCard/ProductCard.skeleton';

const skeletonCount = Array.from({ length: 10 }, (v, k) => k + 1);

const ProductListSkeleton = () => {
  const classes = useStyles();

  return (
    <Flex className={classes.listWrapper}>
      {skeletonCount?.map((product) => (
        <ProductCardSkeleton key={product} />
      ))}
    </Flex>
  );
};
const useStyles = createUseStyles(({ media, radii, sizes }) => ({
  listWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },

  [media.tablet]: {
    listWrapper: {},
  },
}));
export default ProductListSkeleton;
