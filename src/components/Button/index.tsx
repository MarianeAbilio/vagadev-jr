import React, { ButtonHTMLAttributes } from 'react';

import { Container, MarioIcon } from './styles';

import ComponentVisible from '../Visible';

import iconMario from '../../assets/mario-icon.png';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  fontSize?: string;
  fontWeigth?: string;
  height?: string;
  justifyContent?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  width?: string;
  isBougth?: boolean;
}

const ComponentButton: React.FC<IButtonProps> = ({
  backgroundColor,
  borderColor,
  children,
  color,
  fontSize,
  fontWeigth,
  height,
  justifyContent,
  marginLeft,
  marginRight,
  marginTop,
  width,
  isBougth,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      color={color}
      fontSize={fontSize}
      fontWeigth={fontWeigth}
      height={height}
      justifyContent={justifyContent}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      width={width}
      {...props}
    >
      {children}
    <ComponentVisible when={!!isBougth}>
      <MarioIcon src={iconMario} alt="" />
    </ComponentVisible>
    </Container>

  );
};

export default ComponentButton;
