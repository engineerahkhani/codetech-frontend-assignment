import React from 'react';
import Flex from '../Flex';
import { cnj, createUseStyles } from '../../../utils/makeStyle';
import TrashSvg from '../../svg/Trash';

export interface IconProps {
  className?: string;
}

//TODO create a icon name mapper or user icon pack

const Icon: React.FC<IconProps> = ({ className }) => {
  const classes = useStyles();

  return (
    <Flex className={cnj(classes.iconComponentRoot, className)}>
      <TrashSvg />
    </Flex>
  );
};

const useStyles = createUseStyles(({ radii, colors }) => ({
  iconComponentRoot: {
    backgroundColor: colors.red,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: radii.round,
  },
}));

export default Icon;
