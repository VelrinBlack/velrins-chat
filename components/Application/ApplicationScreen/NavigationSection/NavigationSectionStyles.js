import styled from 'styled-components';

const NavigationSectionStyles = styled.nav`
  width: clamp(400px, 25vw, 550px);
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;

  background-color: #0a3745;

  header {
    position: relative;

    height: 250px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: linear-gradient(to top right, #1f8cae 0%, #1b6177 0.01%, #0a3745 100%);

    @media (max-width: 768px) {
      height: 190px;
    }

    button {
      position: absolute;
      top: 0;

      width: 50px;
      height: 50px;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: transparent;
      border: none;
      outline: none;

      cursor: pointer;

      img {
        width: 30px;
        height: 30px;

        @media (max-width: 768px) {
          width: 27px;
          height: 27px;
        }
      }

      &.logout {
        left: 0;
      }

      &.open_settings {
        right: 0;
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 130px;
        height: 130px;
        object-fit: cover;
        margin-bottom: 20px;
        border-radius: 100px;

        @media (max-width: 768px) {
          width: 100px;
          height: 100px;
        }
      }

      h2 {
        color: #fff;

        @media (max-width: 768px) {
          font-size: 20px;
        }
      }
    }
  }

  ul {
    flex: 1;

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
`;

export default NavigationSectionStyles;
