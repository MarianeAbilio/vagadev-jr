import {
  Container,
  BackgroundImage,
  Content,
  Price,
  Title,
  Text,
  Controller,
  ControllerTop,
  ControllerBottom,
  ControllerDescription,
  ControllerDescriptionLabel,
  ControllerLine,
  SlideIndicators,
  SlideChevronIndicators,
  IconChevron,
} from './styles';

import ChevronLeftIcon from '../../assets/angle-left-solid.svg';
import ChevronRightIcon from '../../assets/angle-right-solid.svg';

const Carousel: React.FC = () => {
  return (
    <Container>
      <BackgroundImage>
        <Content>
          <Title>MORTAL KOMBAT</Title>
          <Price centsValue={'99'}>R$ 299</Price>
          <Text>
            Mortal Kombat X combina uma apresentação cinemática única com
            uma jogabilidade totalmente nova. Os jogadores podem escolher pela
            primeira vez diversas variantes de cada personagem, afetando tanto a
            estratégia como o estilo de luta.
          </Text>
        </Content>
        <Controller>
          <ControllerTop>
            <ControllerDescription>
              <ControllerDescriptionLabel>MORTAL KOMBAT</ControllerDescriptionLabel>
              <ControllerLine />
            </ControllerDescription>
          </ControllerTop>
          <ControllerBottom>
            <SlideIndicators>
              <ControllerDescriptionLabel>
                1 / 2
              </ControllerDescriptionLabel>
              <SlideChevronIndicators>
                <IconChevron src={ChevronLeftIcon} /> 
                <IconChevron src={ChevronRightIcon} /> 
              </SlideChevronIndicators>
            </SlideIndicators>
          </ControllerBottom>
        </Controller>
      </BackgroundImage>
    </Container>
  );
};

export default Carousel;