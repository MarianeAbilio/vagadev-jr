import {
  Container,
  Content,
  ContentImage,
  Image,
  Title,
  Price
} from './styles';

import useCart from '../../hooks/useCart';

import colors from '../../styles/colors';

import BoughtItem, { IModalHandles } from '../Modal';

import ComponentButton from '../Button';
import { useCallback, useRef, useState } from 'react';
import ComponentVisible from '../Visible';

interface ICardProps {
  imageURL: string;
  title: string;
  price: string;
}

const Card: React.FC<ICardProps> = ({
  imageURL,
  title,
  price
}) => {

  const cart = useCart();

  const modalRef = useRef<IModalHandles>(null);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.handleOpenModal();
  }, []);

  const [bougthItem, setBougthItem] = useState<boolean>(false);

  const handleSetBougthItem = () => {
    setBougthItem(!bougthItem);
    handleOpenModal();
    cart.addQuantityCart(1);
  }

  return (
    <Container>
      <ContentImage>
        <Image src={imageURL} alt="" />
      </ContentImage>
      <Content>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <ComponentVisible when={!bougthItem}>
          <ComponentButton height="52px" marginTop="27px" onClick={() => { handleSetBougthItem() }}>COMPRAR</ComponentButton>
        </ComponentVisible>
        <ComponentVisible when={bougthItem}>
          <ComponentButton
            height="52px"
            marginTop="27px"
            isBougth
            backgroundColor={colors.darkBlue}
          >
            COMPRADO!
          </ComponentButton>
        </ComponentVisible>
      </Content>
      <BoughtItem ref={modalRef} />
    </Container>

  )
}

export default Card;