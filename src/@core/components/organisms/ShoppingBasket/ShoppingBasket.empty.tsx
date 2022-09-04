import React from 'react';
import { cnj, createUseStyles } from '@core/utils/makeStyle';
import Flex from '../../atoms/Flex';
import useTranslation from '../../../hooks/useTranslation';
import Text from '../../atoms/Text';
import EmptyBasket from '../../svg/EmptyBasket';

const EmptyShoppingBasket: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Flex className={cnj(classes.shoppingBasketRoot)}>
      <EmptyBasket />
      <Text className={classes.emptyText}>{t('y_basket_empty')}</Text>
    </Flex>
  );
};

const useStyles = createUseStyles(({ colors, media, sizes, radii }) => ({
  shoppingBasketRoot: {
    backgroundColor: colors.white,
    boxShadow: [[0, 4, 10, colors.black10]],
    borderRadius: radii.md,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    alignItems: 'center',
    padding: [[100, 0, 100, 0]],
  },
  emptyText: {},

  [media.tablet]: {
    shoppingBasketRoot: {
      minWidth: 337,
      minHeight: 442,
      height: 'auto',
    },
    emptyText: {
      marginTop: 90,
    },
  },
}));

export default EmptyShoppingBasket;
