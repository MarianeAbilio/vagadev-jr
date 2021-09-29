import styled from 'styled-components';

import ImageBannerCarouselDesktop from '../../assets/principal_banner_desktop.jpg';
import ImageBannerCarouselMobile from '../../assets/principal_banner_mobile.jpg';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 850px) {
    position: relative;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 850px) {
    background-image: url(${ImageBannerCarouselMobile});
    aspect-ratio: 5/6;
    align-items: flex-end;
  }
  @media screen and (min-width: 851px) {
    background-image: url(${ImageBannerCarouselDesktop});
    aspect-ratio: 29/13;
    
  }
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  padding-left: 143px;
  padding-right: 143px;
  @media screen and (max-width: 850px) {
    justify-content: flex-end;
    width: 100%;
    padding: 30px;
    background-color: ${colors.blackOpacity};
  }
  @media screen and (min-width: 851px) {
    height: 100%;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 46px;
  font-weight: 800;
  @media screen and (min-width: 851px) and (max-width: 1230px) {
    font-size: 35px;
  }
  @media screen and (max-width: 850px) {
    font-size: 26px;
  }
`;

interface IPrice {
  centsValue: string;
}

export const Price = styled.h1<IPrice>`
  color: ${colors.blue};
  font-size: 70px;
  font-weight: 800;
  position: relative;
  transform: translateX(-35px);
  &::after {
    font-size: 28px;
    content: ',${props => props.centsValue}';
    position: absolute;
    top: 14px;
  }
  @media screen and (min-width: 851px) and (max-width: 1230px) {
    font-size: 55px;
    &::after {
      font-size: 20px;
      content: ',${props => props.centsValue}';
      position: absolute;
      top: 14px;
      
    }
  }
  @media screen and (max-width: 850px) {
    font-size: 48px;
    transform: translateX(-40px);
    &::after {
      font-size: 28px;
      content: ',${props => props.centsValue}';
      position: absolute;
      top: 14px;
    }
  }
`;

export const Text = styled.p`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 300;
  text-align: end;
  max-width: 420px;
  line-height: 25px;
  padding-top: 25px;

  @media screen and (min-width: 851px) and (max-width: 1230px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 850px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const Controller = styled.div`
  width: 63px;
  height: 384px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0px;
  

  @media screen and (min-width: 851px) and (max-width: 1750px) {
    transform: scale(0.75);
    right: -8px;
    top: 80px;
  }
  @media screen and (max-width: 850px) {
    width: 100vw;
    height: 54px;
    flex-direction: row;
    bottom: -54px;
  }
  @media screen and (min-width: 1751px) {
    top: 200px;
  }
`;

export const ControllerTop = styled.div`
  background-color: ${colors.blue};
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 850px) {
    height: 54px;
    flex:1;
    border-radius: 0 0 0 10px;
    justify-content: initial;
  }
`;

export const ControllerBottom = styled.div`
  background-color: ${colors.darkBlue};
  height: 84px;
  border-radius: 0 0 0 10px;
  @media screen and (max-width: 850px) {
    height: 54px;
    border-radius: 0;
    padding: 20px
  }
  @media screen and (min-width: 851px) {
    width: 100%;
  }
`;

export const ControllerDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  @media screen and (min-width: 851px) {
    transform: rotate(90deg);
    min-width: 300px;
  }
`;

export const ControllerDescriptionLabel = styled.span`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 400;
`;

export const ControllerLine = styled.hr`
  border: 1px solid ${colors.white};
  width: 77px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const SlideIndicators = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media screen and (min-width: 851px) {
    width: 100%;
  }
  @media screen and (max-width: 850px) {
    flex-direction: row;
  }
`;

export const SlideChevronIndicators = styled.div`
  display: flex;
  margin-top: 10px;
  @media screen and (max-width: 850px) {
    margin-top: 0px;
    margin-left: 20px;
  }
  
`;

export const IconChevron = styled.img`
  width: 10px;
  cursor: pointer;
  &&:first-child {
    margin-right: 15px;
  }
`;
