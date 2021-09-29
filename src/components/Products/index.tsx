import {
  Container,
  ContentDesktop,
  ContentMobile,
  ContentTitle,
  Icon,
  Title,
  IconChevron
} from './styles';

import Card from '../Card';

import Product01 from '../../assets/product-outriders.png';
import Product02 from '../../assets/product-cyberpunk2077.png';
import Product03 from '../../assets/product-donkeykong.png';
import ProductIcon from '../../assets/icon-products.svg';
import ChevronLeft from '../../assets/angle-left-solid-black.svg';
import ChevronRight from '../../assets/angle-right-solid-black.svg';

const Products: React.FC = () => {

  const products = [
    {
      title: 'Outriders',
      image: Product01,
      price: '200,00'
    },
    {
      title: 'CYBERPUNK 2077',
      image: Product02,
      price: '200,00'
    },
    {
      title: 'Donkey Kong Country Tropical Freeze',
      image: Product03,
      price: '200,00'
    },
  ]

  return (
    <Container>
      <ContentTitle>
        <Icon src={ProductIcon} alt="" />
        <Title>Produtos em destaque</Title>
      </ContentTitle>
      <ContentDesktop>
        {products.map(x => {
          return (
            <Card imageURL={x.image} title={x.title} price={x.price} key={x.title} />
          )
        })}
      </ContentDesktop>
      <ContentMobile>
        <IconChevron src={ChevronLeft} alt="" />
        <Card imageURL={products[0].image} title={products[0].title} price={products[0].price} />
        <IconChevron src={ChevronRight} alt="" />
      </ContentMobile>
    </Container>
  )
}

export default Products;