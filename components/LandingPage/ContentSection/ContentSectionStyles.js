import styled from 'styled-components';

const ContentSectionStyles = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  .logoSection {
    width: 100%;
    padding-left: 20px;

    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);

      width: auto;
      padding: 0;
    }

    img {
      width: 100px;
    }

    div {
      padding-left: 5px;

      h1 {
        font-size: 24px;
        line-height: 1;

        background-image: linear-gradient(272.11deg, #0a3745 3.56%, #1e7f9d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      h2 {
        font-size: 18px;
        line-height: 1;
      }
    }
  }

  .mainSection {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
      margin-top: 150px;
    }

    h2 {
      width: clamp(300px, 25vw, 750px);

      font-size: clamp(40px, 3vw, 90px);
      text-align: center;

      background-image: linear-gradient(272.11deg, #0a3745 3.56%, #1e7f9d 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    img {
      width: clamp(270px, 25vw, 800px);
      margin-top: clamp(40px, 5vw, 100px);
      margin-bottom: 100px;
    }
  }
`;

export default ContentSectionStyles;
