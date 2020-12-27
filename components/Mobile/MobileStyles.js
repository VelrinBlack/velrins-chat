import styled from 'styled-components';

const MobileStyles = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    position: absolute;
    top: 10px;

    width: auto;

    margin-bottom: 50px;
    padding: 0;

    display: flex;
    align-items: center;

    img {
      width: 100px;
    }

    div {
      padding-left: 5px;

      h1 {
        margin: 0;

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

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 80%;
    }

    h1 {
      width: 80%;

      margin-top: 30px;

      text-align: center;
      font-size: 25px;
    }
  }
`;

export default MobileStyles;
