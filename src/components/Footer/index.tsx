import {
  Container, Label, Left, Logo, Right
} from './styles';

import LogoFooter from '../../assets/logo_header.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <Left>
        <Logo src={LogoFooter} alt="" />
      </Left>
      <Right>
        <Label>Agência N1 - Todos os direitos reservados</Label>
      </Right>
    </Container>
  )
}

export default Footer;