import styled from 'styled-components';

const LoadingScreenStyles = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

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
`;

export default LoadingScreenStyles;
