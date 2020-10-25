import styled from 'styled-components';

const FormSectionStyles = styled.div`
  flex: 1;

  background: linear-gradient(180deg, #18586d 0%, #1b6177 0.01%, #0a3745 100%);
  clip-path: polygon(15% 0%, 100% 0, 100% 100%, 0% 100%);

  @media (max-width: 1280px) {
    clip-path: none;
  }

  .contentContainer {
    height: 100%;
    margin-left: 15%;

    @media (max-width: 1280px) {
      margin-left: 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      color: #fff;
      font-size: clamp(40px, 3vw, 90px);
      text-align: center;

      @media (max-width: 1280px) {
        margin-top: 50px;
      }
    }

    form {
      width: 90%;
      margin-top: 50px;

      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 1280px) {
        margin-top: 30px;
      }

      .container {
        width: 100%;

        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
          flex-direction: column;
        }

        input {
          width: 49.5%;

          @media (max-width: 768px) {
            width: 100%;
          }
        }
      }

      input {
        width: 100%;
        height: clamp(40px, 2.5vw, 60px);
        margin-top: 20px;
        padding: 20px;

        border: 0;
        border-radius: 25px;

        font-weight: normal;
        outline: none;
      }

      button {
        width: 200px;
        height: clamp(40px, 2.5vw, 60px);
        margin-top: 30px;

        border: none;
        border-radius: 25px;
        background-color: #fff;

        cursor: pointer;
        outline: none;

        @media (max-width: 1280px) {
          margin-bottom: 50px;
        }

        span {
          font-size: clamp(16px, 1vw, 18px);
          font-weight: bold;

          background-image: linear-gradient(
            272.11deg,
            #0a3745 3.56%,
            #1e7f9d 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
`;

export default FormSectionStyles;
