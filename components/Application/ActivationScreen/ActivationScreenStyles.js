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

    .logOut {
      width: 130px;
      height: 40px;

      position: absolute;
      top: 30px;
      right: 30px;

      border: none;
      border-radius: 25px;
      background-image: linear-gradient(to top, #0a3745 0%, #0a3745 0.01%, #1f8cae 100%);

      color: #fff;
      font-size: 15px;

      outline: none;
      cursor: pointer;

      @media (max-width: 550px) {
        right: 50%;
        transform: translateX(50%);

        background-image: none;
        background-color: #fff;
        border: 4px solid #1f8cae;
        color: #000;
      }
    }

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
        letter-spacing: 5px;
        outline: none;

        @media (max-width: 550px) {
          width: 80%;
          height: 45px;
          font-size: 16px;
        }

        &::placeholder {
          letter-spacing: 0;
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
        margin-top: 5px;

        background-color: #fff;
        border: none;

        font-size: 14px;
        color: #505050;

        cursor: pointer;
        outline: none;

        @media (max-width: 550px) {
          font-size: 13px;
        }
      }

      .validationError {
        margin-top: 20px;
        margin-bottom: 15px;

        color: red;
        line-height: 25px;
        cursor: auto;
      }

      .submit {
        width: 170px;
        height: 50px;

        margin-top: ${(props) => props.buttonMargin};

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

      .loading {
        height: 50px;
        margin-top: ${(props) => props.buttonMargin};

        display: flex;
        align-items: center;

        text-align: center;

        div {
          width: 15px;
          height: 15px;

          margin: 0 4px;

          background-color: #000;
          border-radius: 100%;

          animation: bouncedelay 1.2s infinite ease-in-out both;
        }

        .dot1 {
          animation-delay: -0.32s;
        }

        .dot2 {
          animation-delay: -0.16s;
        }

        @keyframes bouncedelay {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      }

      .serverError {
        height: 50px;
        margin-top: ${(props) => props.buttonMargin};
        margin-bottom: 0;

        display: flex;
        align-items: center;

        animation: 0.6s appear;

        img {
          width: 30px;
        }

        p {
          margin: 0 0 0 5px;

          font-size: 14px;
          font-style: italic;
          line-height: 50px;
        }

        @keyframes appear {
          0% {
            transform: scale(0.2);
          }
          60% {
            transform: scale(1);
          }
          80% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      }
    }
  }
`;

export default ActivationScreenStyles;
