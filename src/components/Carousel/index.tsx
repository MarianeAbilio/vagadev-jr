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
  CarouselContainer,
  CarouselInner,
} from './styles';

import ChevronLeftIcon from '../../assets/angle-left-solid.svg';
import ChevronRightIcon from '../../assets/angle-right-solid.svg';
import { useEffect, useState } from 'react';

const Carousel: React.FC = () => {
  const [indexCarousel, setIndexCarousel] = useState(0);

  const handleClickCarousel = () => {
    if (indexCarousel === 0) {
      setIndexCarousel(1);
      return;
    }
    setIndexCarousel(0);
  };

  useEffect(() => {
    const time = setInterval(() => {
      handleClickCarousel();
    }, 5000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <Container>
      <CarouselContainer>
        <CarouselInner>
          <BackgroundImage>
            <Content>
              <Title>MORTAL KOMBAT</Title>
              <Price centsValue={'99'}>R$ 299</Price>
              <Text>
                Mortal Kombat X combina uma apresentação cinemática única com
                uma jogabilidade totalmente nova. Os jogadores podem escolher
                pela primeira vez diversas variantes de cada personagem,
                afetando tanto a estratégia como o estilo de luta.
              </Text>
            </Content>
          </BackgroundImage>
          <BackgroundImage
            style={{
              transform: `${indexCarousel === 0 ? '' : 'translateY(-100%)'}`,
            }}
          >
            <Content>
              <Title>MORTAL KOMBAT</Title>
              <Price centsValue={'99'}>R$ 199</Price>
              <Text>
                Mortal Kombat X combina uma apresentação cinemática única com
                uma jogabilidade totalmente nova. Os jogadores podem escolher
                pela primeira vez diversas variantes de cada personagem,
                afetando tanto a estratégia como o estilo de luta.
              </Text>
            </Content>
          </BackgroundImage>
        </CarouselInner>
      </CarouselContainer>

      <Controller>
        <ControllerTop>
          <ControllerDescription>
            <ControllerDescriptionLabel>
              MORTAL KOMBAT
            </ControllerDescriptionLabel>
            <ControllerLine />
          </ControllerDescription>
        </ControllerTop>
        <ControllerBottom>
          <SlideIndicators>
            <ControllerDescriptionLabel>
              {indexCarousel + 1} / 2
            </ControllerDescriptionLabel>
            <SlideChevronIndicators>
              <IconChevron
                onClick={handleClickCarousel}
                src={ChevronLeftIcon}
              />
              <IconChevron
                onClick={handleClickCarousel}
                src={ChevronRightIcon}
              />
            </SlideChevronIndicators>
          </SlideIndicators>
        </ControllerBottom>
      </Controller>
    </Container>
  );
};

export default Carousel;