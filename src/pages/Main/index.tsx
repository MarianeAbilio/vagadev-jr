import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
import Footer from '../../components/Footer';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Banner />
      <Products />
      <Footer />
    </>
  );
};

export default Main;
