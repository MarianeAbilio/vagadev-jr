import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 350px;
  height: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: ${colors.boxShadowColor};
  border-radius: 10px;
  @media screen and (min-width: 851px) and (max-width: 1250px) {
    width: 230px;
    height: 550px;
  }
  @media screen and (max-width: 850px) {
    width: 300px;
    max-width: 300px;
  }
`;

export const ContentImage = styled.div`
  padding-top: 36px;
  padding-bottom: 19px;
  width: 100%;
  border-bottom: 2px solid ${colors.blue};
`;

export const Image = styled.img`
  width: 350px;
  max-width: 350px;
  @media screen and (min-width: 851px) and (max-width: 1250px) {
    width: 230px;
    max-width: 230px;
  }
  @media screen and (max-width: 850px) {
    width: 300px;
    max-width: 300px;
  }
`;

export const Content = styled.div`
  background-color: ${colors.silver};
  display: grid;
  padding-top: 25px;
  padding-left: 36px;
  padding-right: 36px;
  height: 100%;
  @media screen and (min-width: 851px) and (max-width: 1250px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Title = styled.span`
  font-size: 14px;
  color: ${colors.darkBlue};
  font-weight: 300;
`;

export const Price = styled.span`
  font-size: 18px;
  color: ${colors.darkBlue};
  font-weight: 800;
`;

