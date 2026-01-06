import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MainBanner from "../components/home/MainBanner";
import CategorySection from "../components/home/CategorySection";
import ProductSection from "../components/home/ProductSection";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <MainBanner />
        <CategorySection />
        <ProductSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
