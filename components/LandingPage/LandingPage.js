import LandingPageStyles from './LandingPageStyles';
import ContentSection from './ContentSection/ContentSection';
import FormSection from './FormSection/FormSection';
import Footer from './Footer/Footer';

const LandingPage = () => (
  <LandingPageStyles>
    <main>
      <ContentSection />
      <FormSection />
    </main>
    <Footer />
  </LandingPageStyles>
);

export default LandingPage;
