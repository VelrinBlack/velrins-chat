import styled from 'styled-components';

const HomeStyles = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    height: auto;
  }

  main {
    position: relative;
    flex: 1;
    display: flex;

    @media (max-width: 1280px) {
      flex-direction: column;
    }
  }
`;

export default HomeStyles;
