import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -80px;
  margin-bottom: 30px;
  @media screen and (max-width: 850px) {
    margin-top: 54px;
  }
`;

export const Content = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 850px) {
    width: 100%;
    padding: 15px;
    flex-direction: column;
    justify-content: center;
  }
`;

interface IBanner {
  image: string;
}

export const ContainerSquare = styled.div`
  display: flex;
  flex-direction: column;
  &&:first-child {
    margin-bottom: 10px;
  }
`;

export const BannerSquare = styled.div<IBanner>`
  width: calc(90vw / 2 - 10px);
  height: 368px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('${props => props.image}');

  &&:first-child {
    margin-right: 10px;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    margin-right: 0;
    height: 219px;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: calc(90vw / 2 - 10px);
  background-color: ${colors.blue};
  border-left: 10px solid ${colors.darkBlue};
  padding: 15px;
  border-radius: 0 0 5px 5px;
  @media screen and (max-width: 850px) {
    width: 100%;
    height: 28px;
    border-left: 5px solid ${colors.darkBlue};
    padding: 10px;
  }
`;

export const DescriptionLabel = styled.span`
  color: ${colors.darkBlue};
  font-size: 14px;
  font-weight: 700;
  margin-right: 35px;
  @media screen and (max-width: 850px) {
    margin-right: 15px;
    font-size: 12px;
  }
`;

export const ControllerLine = styled.hr`
  border: 1px solid ${colors.darkBlue};
  width: 220px;
  @media screen and (max-width: 850px) {
    width: 75px;
  }
`;
