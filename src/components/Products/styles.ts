import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentDesktop = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 25px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const ContentMobile = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  @media screen and (min-width: 851px) {
    display: none;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  margin-bottom: 80px;
  width: 90vw;
  @media screen and (max-width: 850px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.span`
  font-size: 36px;
  color: ${colors.darkBlue};
  font-weight: 300;
  @media screen and (max-width: 850px) {
    font-size: 18px;
  }
`;

export const Icon = styled.img`
  margin-right: 22px;
  @media screen and (max-width: 850px) {
    width: 18px;
    margin-right: 15px;
  }
`;

export const IconChevron = styled.img`
  width: 15px;
  &&:first-child {
    margin-right: 10px;
  }
  &&:last-child {
    margin-left: 10px;
  }
`;