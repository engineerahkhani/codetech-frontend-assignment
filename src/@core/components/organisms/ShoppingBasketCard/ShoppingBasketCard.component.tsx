import React from 'react';
import Image from '../../atoms/Image';
import { IProduct } from '../../../types';
import { cnj, createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '../../../types/theme';
import Flex from '../../atoms/Flex';
import useTranslation from '../../../hooks/useTranslation';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Divider from '../../atoms/Divider';
import Icon from '../../atoms/Icon';

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
  const { t } = useTranslation();
  const onClickRemove = () => onClickAddRemoveFromBasket(data);

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

const useStyles = createUseStyles(
  ({ colors, media, sizes, radii }: ITheme) => ({
    cardRoot: {},
    cardWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: radii.sm,
      border: [[1, 'slide', colors.black]],
    },
    imageWrapper: {
      backgroundColor: '#EFEFEF',
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
  })
);

export default ShoppingBasketCard;
