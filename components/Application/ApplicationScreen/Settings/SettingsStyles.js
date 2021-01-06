import styled from 'styled-components';

const SettingsStyles = styled.div`
  .settingsShadow {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 40%);

    .settings {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      width: clamp(500px, 50vw, 800px);
      height: 450px;

      background-color: #fff;
      border-radius: 20px;

      h2 {
        margin-top: 20px;

        text-align: center;
        font-size: 30px;
      }

      form {
        margin-top: 30px;

        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 150px;
        }

        div {
          &.nameField {
            margin-top: 20px;
          }
          &.surnameField {
            margin-top: 10px;
          }

          input {
            margin-left: 10px;
            padding: 10px;

            border: 1px solid #000;
            border-radius: 10px;

            outline: none;
          }
        }

        button {
          margin-top: 20px;
          padding: 10px 20px;

          border: none;
          border-radius: 10px;
          background-image: linear-gradient(272.11deg, #0a3745 3.56%, #1e7f9d 100%);

          cursor: pointer;
          outline: none;

          span {
            font-size: 16px;
            font-weight: bold;
            color: #fff;
          }
        }
      }
    }
  }
`;

export default SettingsStyles;
