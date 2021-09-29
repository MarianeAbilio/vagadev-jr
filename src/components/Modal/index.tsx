import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import ComponentVisible from '../Visible'

import CloseIcon from '../../assets/close_btn.svg';
import IconMario from '../../assets/marioImage.png';

import {
  BodyContainer,
  Container,
  FocusBackground,
  MarioImage,
  Subtitle,
  CloseIconButton,
} from './styles';


export interface IModalHandles {
  className?: string;
  handleOpenModal: () => void;
}

const BougthItem: React.ForwardRefRenderFunction<IModalHandles> = (
  _,
  ref,
) => {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = useCallback(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      handleOpenModal,
    };
  });

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  const handleCloseModal = useCallback(
    event => {
      if (visible && !event.target?.closest('.notCloseModal')) {
        setVisible(false);
      }
    },
    [visible],
  );

  useEffect(() => {
    document.addEventListener('click', handleCloseModal);

    return () => {
      document.removeEventListener('click', handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <ComponentVisible when={visible}>
      <FocusBackground>
        <Container className="notCloseModal">
          <BodyContainer center>
            <CloseIconButton src={CloseIcon} onClick={handleClose} />
            <Subtitle>
              Pedido realizado com sucesso!
            </Subtitle>
            <MarioImage src={IconMario} />
          </BodyContainer>
        </Container>
      </FocusBackground>
    </ComponentVisible>
  );
};

export default forwardRef(BougthItem);