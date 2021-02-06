import styled from 'styled-components';

const LandingPageStyles = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  main {
    position: relative;
    flex: 1;
    display: flex;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }
`;

export default LandingPageStyles;
