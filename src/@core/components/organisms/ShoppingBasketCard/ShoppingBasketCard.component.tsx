import React, { useEffect } from 'react';
import Image from '../../atoms/Image';
import { IProduct } from '../../../types';
import { cnj, createUseStyles } from '@core/utils/makeStyle';
import Flex from '../../atoms/Flex';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Divider from '../../atoms/Divider';
import Icon from '../../atoms/Icon';
import useTranslation from '../../../hooks/useTranslation';

interface IShoppingBasketCardProps {
  data: IProduct;
  className?: string;
  onClickAddRemoveFromBasket: (data: IProduct) => void;
  visibleDivider: boolean;
}

const ShoppingBasketCard: React.FC<IShoppingBasketCardProps> = ({
  onClickAddRemoveFromBasket,
  className,
  data,
  visibleDivider,
}) => {
  const classes = useStyles();
  const onClickRemove = () => onClickAddRemoveFromBasket(data);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClickRemove();
    }, data.orderLimitTime);

    return () => {
      clearTimeout(timer);
    };
  }, [data.id]);

  return (
    <Flex className={cnj(classes.cardRoot, className)}>
      <Flex className={classes.cardWrapper}>
        <Flex className={classes.imageWrapper}>
          <Image className={classes.cardImage} src={data.poster} />
          <Button onClick={onClickRemove} className={classes.iconWrapper}>
            <Icon />
          </Button>
        </Flex>
        <Flex className={classes.infoWrapper}>
          <Text bold className={classes.name}>
            {data.name}
          </Text>
          <Text className={classes.priceWithUnit}>{data.priceWithUnit}</Text>
        </Flex>
      </Flex>
      {visibleDivider && <Divider className={classes.divider} />}
    </Flex>
  );
};

const useStyles = createUseStyles(({ colors, sizes, radii }) => ({
  cardRoot: {},
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radii.sm,
    border: [[1, 'slide', colors.black]],
  },
  imageWrapper: {
    backgroundColor: colors.border,
    maxWidth: 80,
    maxHeight: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: [[0, 4, 10, colors.black10]],
    position: 'relative',
  },
  cardImage: {
    borderRadius: radii.sm,
    overflow: 'hidden',
    objectFit: 'cover',
  },

  infoWrapper: {
    marginLeft: sizes.md,
  },
  priceWithUnit: {
    marginTop: sizes.sm,
  },
  divider: {
    margin: [[15, 0]],
  },
  iconWrapper: {
    backgroundColor: colors.transparent,
    padding: [[0, 0]],
    borderRadius: radii.round,
    position: 'absolute',
    left: -15,
    toP: 15,
  },
  expired: {
    color: colors.red,
  },
}));

export default ShoppingBasketCard;
