import React from 'react';
import Image from '../../atoms/Image';
import { IProduct } from '../../../types';
import { cnj, createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '../../../types/theme';
import Flex from '../../atoms/Flex';
import useTranslation from '../../../hooks/useTranslation';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

interface IProductCardProps {
  data: IProduct;
  className?: string;
  onClickAddToBasket: (data: IProduct) => void;
  disabledAddToCard?: boolean;
}

const ProductCard: React.FC<IProductCardProps> = ({
  onClickAddToBasket,
  className,
  data,
  disabledAddToCard,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const onClickAdd = () => onClickAddToBasket(data);

  return (
    <Flex className={cnj(classes.cardRoot, className)}>
      <Flex className={classes.cardWrapper}>
        <Flex className={classes.imageWrapper}>
          <Image className={classes.cardImage} src={data.poster} />
        </Flex>
        <Flex className={classes.infoWrapper}>
          <Text className={classes.name}>{data.name}</Text>
          <Text className={classes.priceWithUnit}>{data.priceWithUnit}</Text>
          <Button
            disabled={disabledAddToCard}
            onClick={onClickAdd}
            className={classes.button}
          >
            <Text color="white">{t('add_to_basket')}</Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

const useStyles = createUseStyles(
  ({ colors, media, sizes, radii }: ITheme) => ({
    cardRoot: {},
    cardWrapper: {
      width: '100%',
      backgroundColor: colors.white,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: radii.sm,
      border: [[1, 'slide', colors.black]],
    },
    imageWrapper: {
      backgroundColor: colors.border,
      height: 241,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: [[0, 4, 10, colors.black10]],
    },
    cardImage: {
      borderRadius: radii.sm,
      overflow: 'hidden',
      objectFit: 'cover',
      maxHeight: 160,
    },

    infoWrapper: {
      padding: [[15, sizes.md]],
    },
    priceWithUnit: {
      marginTop: sizes.sm,
    },
    button: {
      marginTop: sizes.sm,
      width: '100%',
    },
  })
);

export default ProductCard;
