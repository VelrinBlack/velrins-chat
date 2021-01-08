import styled from 'styled-components';

const NavigationCardStyles = styled.div`
  width: 100%;
  padding: 20px 0;

  display: inline-grid;
  grid-template-columns: 15px 50px 1fr 30px 15px;

  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #14576b;
  }

  .profileImg {
    grid-column: 2;

    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }

  div {
    margin-left: 15px;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }

  button {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;

    cursor: pointer;
    outline: none;

    img {
      width: 100%;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.3);
      }
    }
  }

  .modalBackground {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 40%);

    z-index: 1;

    .modal {
      width: clamp(500px, 50vw, 800px);
      margin: 0;
      padding: 25px;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);

      border-radius: 20px;
      background-color: #fff;

      text-align: center;

      h2 {
        grid-column: 1 / 3;
        margin-bottom: 20px;

        font-weight: 200;
        color: #000;
      }

      div > button {
        height: 100%;
        border-radius: 10px;

        font-weight: 400;

        transition: transform 0.2s;

        &.no {
          border: 1px solid #b0b0b0;
        }

        &.yes {
          background-color: red;
        }

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;

export default NavigationCardStyles;
