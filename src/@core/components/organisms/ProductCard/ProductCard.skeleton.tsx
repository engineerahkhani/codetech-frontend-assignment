import React from 'react';
import Skeleton from '../../atoms/Skeleton';
import Flex from '../../atoms/Flex';
import { createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '@core/types/theme';

const ProductCardSkeleton = () => {
  const classes = useStyles();
  return (
    <Flex className={classes.userCardSkeletonRoot}>
      <Skeleton className={classes.skeleton} variant="square" />
    </Flex>
  );
};

const useStyles = createUseStyles(({ media, radii, sizes }: ITheme) => ({
  userCardSkeletonRoot: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '50%',
    borderRadius: radii.sm,
    overflow: 'hidden',
    padding: sizes.sm,
    height: 337,
  },

  [media.tablet]: {
    listWrapper: {
      padding: -sizes.sm,
    },
    ProductListRoot: {
      flexDirection: 'row',
    },
    userCardSkeletonRoot: {
      flexBasis: '33.33%',
    },
  },
}));

export default ProductCardSkeleton;
