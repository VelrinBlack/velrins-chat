import styled from 'styled-components';

const FormSectionStyles = styled.div`
  flex: 1;

  background: linear-gradient(180deg, #18586d 0%, #1b6177 0.01%, #0a3745 100%);
  clip-path: polygon(15% 0%, 100% 0, 100% 100%, 0% 100%);
  overflow-y: hidden;

  @media (max-width: 1024px) {
    clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 100%);
  }

  .formSectionContainer {
    position: relative;

    height: 100%;
    margin-left: 15%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
      margin: 20px 0 80px 0;
    }

    h2 {
      color: #fff;
      font-size: clamp(40px, 3vw, 90px);
      text-align: center;
    }

    form {
      width: 90%;
      margin-top: 30px;

      display: flex;
      flex-direction: column;
      align-items: center;

      .container {
        width: 100%;

        display: flex;
        justify-content: space-between;

        input {
          width: 49.5%;
        }
      }

      input {
        width: 100%;
        height: clamp(40px, 3vw, 50px);
        margin-top: 20px;
        padding: 20px;

        border: 0;
        border-radius: 25px;

        font-weight: normal;
        outline: none;

        @media (max-width: 768px) {
          margin-top: 15px;
        }
      }

      .emailError,
      .passwordError,
      .repeatPasswordError {
        margin: 5px 0 0 20px;
        align-self: flex-start;

        color: red;
        font-size: 12px;

        @media (max-width: 768px) {
          margin: 0 0 -10px 20px;
        }
      }

      .emptyFieldsError {
        margin: 25px 0 15px 0;

        color: red;
        font-size: 12px;
      }

      button {
        width: 200px;
        height: clamp(40px, 2.5vw, 60px);

        border: none;
        border-radius: 25px;
        background-color: #fff;

        cursor: pointer;
        outline: none;

        @media (max-width: 768px) {
          width: 150px;
        }

        span {
          font-size: clamp(16px, 1vw, 18px);
          font-weight: bold;

          background-image: linear-gradient(272.11deg, #0a3745 3.56%, #1e7f9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .loading {
        height: 30px;
        margin-top: 30px;

        display: flex;
        align-items: center;

        text-align: center;

        div {
          width: 15px;
          height: 15px;

          margin: 0 4px;

          background-color: #fff;
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

      .error {
        height: 30px;
        margin-top: 30px;

        display: flex;
        align-items: center;

        animation: 0.6s appear;

        img {
          width: 30px;
        }

        p {
          margin: 0 0 0 5px;

          color: #fff;
          font-size: 14px;
          font-style: italic;
          line-height: 30px;
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

    p {
      height: 30px;
      margin-top: 30px;

      color: #fff;
      font-size: 14px;
      font-weight: 200;
      line-height: 30px;

      span {
        font-weight: 400;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export default FormSectionStyles;
