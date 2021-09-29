import {
  Container,
  Content,
  BannerSquare,
  Description,
  DescriptionLabel,
  ControllerLine,
  ContainerSquare,
} from './styles';

import Banner01 from '../../assets/zelda_banner.jpg';
import Banner02 from '../../assets/sekiro_banner.jpg';
import React from 'react';

const Banner: React.FC = () => {

  const banners = [
    {
      title: 'The Legend of Zelda - Breath of the wild',
      image: Banner01,
    },
    {
      title: 'SEKIRO - Shadows die twice',
      image: Banner02,
    },
  ]

  return (
    <Container>
      <Content>
        {banners.map(x => {
          return (
            <React.Fragment key={x.title}>
              <ContainerSquare>
                <BannerSquare image={x.image} />
                <Description>
                  <DescriptionLabel>
                    {x.title}
                  </DescriptionLabel>
                  <ControllerLine />
                </Description>
              </ContainerSquare>

            </React.Fragment>
          )
        })}

      </Content>
    </Container>
  )
}

export default Banner;