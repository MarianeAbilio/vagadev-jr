import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 123px;
  background-color: ${colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 850px) {
    position: fixed;
  }
`;

export const Content = styled.div`
  padding-top: 44px;
  padding-bottom: 44px;
  display: flex;
  justify-content: space-between;
  width: 90vw;
  max-width: 1200px;
  align-items: center;
  position: relative;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
`;

interface IHamburguerAndCloseIconMenu {
  isMenuOpen: boolean;
}

export const HamburguerMenu = styled.img<IHamburguerAndCloseIconMenu>`
  height: 24px;
  width: 30px;
  cursor: pointer;
  @media screen and (max-width: 850px) {
    display: ${props => props.isMenuOpen ? 'none' : ''};
  }
`;


export const CloseMenu = styled.img<IHamburguerAndCloseIconMenu>`
  height: 24px;
  width: 30px;
  cursor: pointer;
  @media screen and (min-width: 851px) {
    display: ${props => props.isMenuOpen ? 'none' : ''};
  }
`;

export const Logo = styled.img`
  margin-left: 43px;
  width: 163px;
  height: 35px;
  @media screen and (max-width: 850px) {
    width: 107px;
    height: 23px;
    margin-left: 25px;
  }
`;

export const Menu = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 38px;
  padding-right: 43px;
  border-right: 1px solid ${colors.white};
  cursor: pointer;

  &&:first-child {
    padding-left: 0px;
  }
  &&:last-child {
    padding-right: 0px;
    border-right: 0px;
  }

  @media screen and (max-width: 850px) {
    border-right: 0px;
    padding-left: 20px;
    padding-right: 0px;
  }
`;

interface IMenuIcon {
  width: string;
}

export const MenuIcon = styled.img<IMenuIcon>`
  width: ${props => props.width};
`;

export const MenuLabel = styled.span`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 500;
  margin-left: 20px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const CartQuantity = styled.div`
  width: 23px;
  height: 23px;
  background-color: ${colors.blue};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
`;

export const LabelCartQuantity = styled.span`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 800;
`;

export const NavbarContainer = styled.div`
  display: flex;
  position: absolute;
  top: 118px;
  left: -30px;
  @media screen and (max-width: 850px) {
    top: 119px;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
  }
`;

export const NavbarContent = styled.div`
  background-color: ${colors.darkBlue};
  border: 2px solid ${colors.blue};
  width: 565px;
  height: 249px;
  padding: 45px 45px 45px 37px;
  border-radius: 5px;
  z-index: 998;

  @media screen and (min-width: 851px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 33px;
  }
  @media screen and (max-width: 850px) {
    border: 0px;
    border-radius: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
  }
`;

export const NavbarContentDownSquare = styled.div`
  background-color: ${colors.blue};
  border-radius: 5px;
  width: 565px;
  height: 249px;
  position: absolute;
  top: 12px;
  left: 12px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const Indicator = styled.div`
  width: 0;
  height: 0;
  border-left: 18px solid ${colors.transparent};
  border-right: 18px solid ${colors.transparent};
  border-bottom: 18px solid ${colors.blue};
  position: absolute;
  z-index: 999;
  left: 30px;
  top: -18px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavbarSection = styled.span`
  display: flex;
  flex-direction: column;
`;

export const NavbarItemsTitle = styled.span`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  padding-left: 8px;
  padding-bottom: 8px;
  @media screen and (max-width: 850px) {
    font-size: 24px;
  }
`;

export const NavbarItems = styled.span`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 300;
  padding: 8px;
  width: 140px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.blue};
    border-radius: 5px;
  }
  @media screen and (max-width: 850px) {
    font-size: 18px;
    width: 100%;
  }
`;

export const MobileMenuDivisor = styled.hr`
  border: 1px solid ${colors.deepBlue};
  margin-top: 25px;
  margin-bottom: 25px;
  @media screen and (min-width: 851px) {
    display: none;
  }
`;
