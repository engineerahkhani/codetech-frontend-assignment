import React from 'react';
import { createUseStyles, cnj } from '@core/utils/makeStyle';
import { ITheme } from '../../../types/theme';
import { colors } from '../../../themes/foundations';

export interface TextComponentProps {
  className?: string;
  children: any;
  color?: keyof typeof colors;
  bold?: boolean;
}

const Text: React.FC<TextComponentProps> = ({ children, ...props }) => {
  const { className, color, bold } = props;
  const classes = useStyles();

  return (
    <span
      className={cnj(
        classes.textRoot,
        color === 'white' && classes.white,
        bold && classes.fontBold,
        className
      )}
    >
      {children}
    </span>
  );
};

const useStyles = createUseStyles(({ fonts, colors }: ITheme) => ({
  textRoot: {
    fontStyle: 'normal',
    lineHeight: '22px',
    fontSize: 15,
    color: colors.black,
    fontWeight: 'normal',
    fontFamily: fonts.mono,
    fontSmoothing: 'antialiased',
    display: 'flex',
    flexDirection: 'column',
  },
  white: {
    color: colors.white,
  },
  fontBold: {
    fontWeight: 'bold',
  },
}));

export default Text;
