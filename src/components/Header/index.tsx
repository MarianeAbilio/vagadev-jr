import { useState } from 'react';

import {
  Container,
  Content,
  HamburguerMenu,
  Right,
  Left,
  Logo,
  Menu,
  MenuItem,
  MenuIcon,
  MenuLabel,
  CartQuantity,
  LabelCartQuantity,
  NavbarContainer,
  NavbarContent,
  NavbarContentDownSquare,
  Indicator,
  NavbarSection,
  NavbarItemsTitle,
  NavbarItems,
  MobileMenuDivisor,
  CloseMenu,
} from './styles';

import HamburguerMenuIcon from '../../assets/icon_hamburguer.svg';
import LogoN1Rush from '../../assets/logo-n1rush.png';
import ContactIcon from '../../assets/paper-plane.svg';
import SearchIcon from '../../assets/search-solid.svg';
import BagIcon from '../../assets/shopping-bag-solid.svg';
import CloseIcon from '../../assets/icon_close.svg';

import ComponentVisible from '../Visible';


const Header: React.FC = () => {

  const menu = [
    {
      title: 'Luta',
      items: [
        'Mortal Kombat',
        'Smash Bros',
        'Killer Instict',
        'DBZ Kakarot'
      ]
    },
    {
      title: 'Ação  / Aventura',
      items: [
        'GTA V',
        'Tomb Raider',
        'HALO',
        'Call of Duty'
      ]
    },
    {
      title: 'Corrida',
      items: [
        'NEED For SPEED',
        'Forza Horizon'
      ]
    },

  ]

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setMenuOpen(currentActive => !currentActive);
  };

  return (
    <Container>
      <Content>
        <Left>
          <HamburguerMenu
            src={HamburguerMenuIcon}
            alt=""
            onClick={handleOpenMenu}
            isMenuOpen={menuOpen}
          />
          <ComponentVisible when={menuOpen}>
            <CloseMenu
              src={CloseIcon}
              alt=""
              onClick={handleOpenMenu}
              isMenuOpen={menuOpen}
            />
          </ComponentVisible>
          <Logo src={LogoN1Rush} alt="" />
        </Left>
        <Right>
          <Menu>
            <MenuItem>
              <MenuIcon src={ContactIcon} width="31px" />
              <MenuLabel>CONTATO</MenuLabel>
            </MenuItem>
            <MenuItem>
              <MenuIcon src={SearchIcon} width="25px" />
              <MenuLabel>BUSCAR</MenuLabel>
            </MenuItem>
            <MenuItem>
              <MenuIcon src={BagIcon} width="22px" />
              <CartQuantity>
                <LabelCartQuantity>2</LabelCartQuantity>
              </CartQuantity>
            </MenuItem>
          </Menu>
        </Right>
        <ComponentVisible when={menuOpen}>
        <NavbarContainer>
          <Indicator />
          <NavbarContent>
            {menu.map(x => {
              return (
                <>
                <NavbarSection key={x.title}>
                  <NavbarItemsTitle>
                    {x.title}
                  </NavbarItemsTitle>
                  {x.items.map(y => {
                    return (
                      <NavbarItems key={y}>
                        {y}
                      </NavbarItems>
                    )
                  })}
                </NavbarSection>
                <MobileMenuDivisor />
                </>
              )
            })}
          </NavbarContent>
          <NavbarContentDownSquare />
        </NavbarContainer>
        </ComponentVisible>
      </Content>
    </Container>
  );
};

export default Header;