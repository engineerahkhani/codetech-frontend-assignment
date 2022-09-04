import React from 'react';
import { cnj, createUseStyles } from '../../../utils/makeStyle';
import Flex from '../Flex';

export interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  const classes = useStyles();

  return <Flex className={cnj(classes.dividerComponentRoot, className)} />;
};

const useStyles = createUseStyles(({ colors }) => ({
  dividerComponentRoot: {
    minHeight: 1,
    width: '100%',
    backgroundColor: colors.border,
    color: colors.transparent,
  },
}));

export default Divider;
