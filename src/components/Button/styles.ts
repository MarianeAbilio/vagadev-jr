import styled from 'styled-components';

import colors from '../../styles/colors';

interface IButtonProps {
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
}

export const Container = styled.button<IButtonProps>`
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.blue};
  border: 1px solid
    ${props => (props.borderColor ? props.borderColor : colors.transparent)};
  border-radius: 0.5rem;
  color: ${props => (props.color ? props.color : colors.white)};
  display: flex;
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => (props.fontWeigth ? props.fontWeigth : '700')};
  font-weight: 700;
  height: ${props => (props.height ? props.height : '40px')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '0px')};
  margin-right: ${props => (props.marginRight ? props.marginRight : '0px')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
  transition: all 0.3s ease;
  width: ${props => (props.width ? props.width : '100%')};
  position: relative;
`;

export const MarioIcon = styled.img`
  position: absolute;
  width: 68px;
  bottom: 0;
  right: 5px;
  @media screen and (min-width: 851px) and (max-width: 1250px) {
    width: 55px;
    right: 0px;
  }
`;