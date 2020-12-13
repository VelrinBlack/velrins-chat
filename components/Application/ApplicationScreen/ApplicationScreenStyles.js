import styled from 'styled-components';

const ApplicationScreenStyles = styled.div`
  height: 100vh;
  display: flex;

  nav {
    width: clamp(400px, 25vw, 550px);
    background-color: #0a3745;

    header {
      height: 250px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background-image: linear-gradient(to top right, #1f8cae 0%, #1b6177 0.01%, #0a3745 100%);

      img {
        width: 130px;
        margin-bottom: 20px;
        border-radius: 100px;
      }

      h2 {
        color: #fff;
      }
    }

    ul {
      height: calc(100% - 250px);
      padding-top: 20px;

      overflow-y: scroll;

      .loading {
        height: 100px;

        display: flex;
        align-items: center;
        justify-content: center;

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

      &::-webkit-scrollbar {
        width: 10px;
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #1b6177;
        border-radius: 5px;
      }
    }
  }

  main {
    flex: 1;
  }
`;

export default ApplicationScreenStyles;