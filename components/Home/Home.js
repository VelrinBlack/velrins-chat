import HomeStyles from './HomeStyles';

import ContentSection from './ContentSection/ContentSection';
import FormSection from './FormSection/FormSection';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <HomeStyles>
      <main>
        <ContentSection />
        <FormSection />
      </main>
      <Footer />
    </HomeStyles>
  );
};

export default Home;
