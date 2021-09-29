import styled from 'styled-components';

import colors from '../../styles/colors';

export const FocusBackground = styled.div`
  align-items: center;
  background-color: rgba(8, 65, 84, 0.62);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  opacity: 1;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
`;

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem;
  display: flex;
  flex-flow: column;
  max-height: 80%;
  opacity: 1;
  overflow-y: hidden;
  width: 400px;
`;

export const Subtitle = styled.p`
  color: ${colors.darkBlue};
  font-size: 0.875rem;
  font-weight: 300;
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
`;

interface IBodyContainerProps {
  center?: boolean;
}

export const BodyContainer = styled.div<IBodyContainerProps>`
  align-items: ${props => (props.center ? 'center' : '')};
  display: ${props => (props.center ? 'flex' : '')};
  flex-direction: ${props => (props.center ? 'column' : '')};
  height: auto;
  overflow-y: auto;
  padding: 1.6rem 2rem 0;
  position: relative;
  width: 100%;
`;

export const CloseIconButton = styled.img`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
`;

export const MarioImage = styled.img`
  width: 217px;
`;
