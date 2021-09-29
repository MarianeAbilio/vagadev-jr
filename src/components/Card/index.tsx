import {
  Container,
  Content,
  ContentImage,
  Image,
  Title,
  Price
} from './styles';

import colors from '../../styles/colors';

import BoughtItem, { IModalHandles } from '../Modal';

import ComponentButton from '../Button';
import { useCallback, useRef, useState } from 'react';

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

  const [activeModal, setActiveModal] = useState<boolean>(false);
  const modalRef = useRef<IModalHandles>(null);

  const handleOpenAccountModal = useCallback(() => {
    modalRef.current?.handleOpenModal();
    setActiveModal(false);
  }, []);

  const handleCloseAccountModal = useCallback(
    event => {
      if (activeModal && !event.target?.closest('.bougth')) {
        setActiveModal(false);
      }
    },
    [activeModal],
  );

  return (
    <Container>
      <ContentImage>
        <Image src={imageURL} alt="" />
      </ContentImage>
      <Content>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <ComponentButton height="52px" marginTop="27px" onClick={() => {handleOpenAccountModal()}}>COMPRAR</ComponentButton>
        <ComponentButton
          height="52px"
          marginTop="27px"
          isBougth
          backgroundColor={colors.darkBlue}
        >
          COMPRADO!
        </ComponentButton>
      </Content>
      <BoughtItem ref={modalRef} />
    </Container>
    
  )
}

export default Card;