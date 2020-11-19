import styled from 'styled-components';

const ActivationScreenStyles = styled.div`
  display: flex;
  height: 100vh;

  .imageContainer {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1400px) {
      display: none;
    }

    img {
      width: clamp(500px, 32vw, 700px);
    }
  }

  .contentContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: clamp(40px, 2.8vw, 60px);
      text-align: center;

      @media (max-width: 550px) {
        font-size: 30px;
      }
    }

    .underline {
      width: 50%;
      height: 5px;

      margin: 30px auto 0 auto;

      background-image: linear-gradient(to right, #0a3745 0%, #0a3745 0.01%, #1f8cae 100%);

      @media (max-width: 550px) {
        margin-top: 20px;
        height: 3px;
      }
    }

    p {
      margin-top: 50px;

      text-align: center;
      font-size: 18px;

      @media (max-width: 550px) {
        margin-top: 40px;
        font-size: 16px;
      }

      span {
        font-size: 14px;
        color: #505050;

        cursor: pointer;

        @media (max-width: 550px) {
          font-size: 13px;
        }
      }
    }

    form {
      width: 100%;

      margin-top: 50px;

      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 550px) {
        margin-top: 40px;
      }

      input {
        width: clamp(450px, 30vw, 600px);
        height: 50px;

        border: 1px solid #373737;
        border-radius: 25px;

        text-align: center;
        font-size: 18px;
        outline: none;

        @media (max-width: 550px) {
          width: 80%;
          height: 45px;
          font-size: 16px;
        }
      }

      p {
        margin-top: 5px;

        font-size: 14px;
        color: #505050;

        cursor: pointer;

        @media (max-width: 550px) {
          font-size: 13px;
        }
      }

      button {
        width: 170px;
        height: 50px;

        margin-top: 50px;

        border: none;
        border-radius: 25px;
        background-image: linear-gradient(to top, #0a3745 0%, #0a3745 0.01%, #1f8cae 100%);

        color: #fff;
        font-size: 18px;
        font-weight: 600;

        outline: none;
        cursor: pointer;

        @media (max-width: 550px) {
          height: 45px;
          margin-top: 40px;
        }
      }
    }
  }
`;

export default ActivationScreenStyles;
