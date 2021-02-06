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

      @media (max-width: 768px) {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        border-radius: 0;
      }

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

        .imageField {
          position: relative;

          &:hover {
            .profileImage {
              filter: brightness(60%);
            }
            .editIcon {
              display: block;
            }
          }

          input {
            display: block;
            position: absolute;

            width: 150px;
            height: 150px;

            opacity: 0;
            z-index: 1;
            cursor: pointer;
          }

          .profileImage {
            width: 150px;
            height: 150px;

            object-fit: cover;
            border-radius: 100%;
            box-shadow: 0 0 30px -10px #616161;

            @media (max-width: 768px) {
              width: 130px;
              height: 130px;

              box-shadow: 0 0 25px -10px #616161;
            }
          }

          .editIcon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            width: 40px;
            display: none;

            filter: drop-shadow(0 0 5px black);

            @media (max-width: 768px) {
              width: 30%;
            }
          }
        }

        .nameField,
        .surnameField {
          &.nameField {
            margin-top: 20px;
          }
          &.surnameField {
            margin-top: 10px;
          }

          @media (max-width: 768px) {
            margin-bottom: 5px;

            display: flex;
            flex-direction: column;
            align-items: center;

            label {
              font-size: 15px;
              margin-bottom: 7px;
            }
          }

          input {
            margin-left: 10px;
            padding: 10px;

            border: 1px solid #000;
            border-radius: 10px;

            outline: none;
          }
        }

        .loading {
          height: 30px;
          margin-top: 30px;

          display: flex;
          align-items: center;

          text-align: center;

          div {
            width: 12px;
            height: 12px;

            margin: 0 3px;

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
