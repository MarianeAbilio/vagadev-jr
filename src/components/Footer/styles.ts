import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const Left = styled.div`
  background-color: ${colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;
`;

export const Right = styled.div`
  background-color: ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: initial;
  padding: 15px;
`;

export const Logo = styled.img`
  width: 42px;
`;

export const Label = styled.span`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 300;
`;