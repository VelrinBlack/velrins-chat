import styled from 'styled-components';

const SendMessageFormStyles = styled.div`
  form {
    margin: 5px 20px;
    display: flex;

    input {
      flex: 1;

      height: 40px;

      margin-right: 10px;
      padding: 0 20px;

      background-color: #e4e4e4;
      border: none;
      border-radius: 20px;

      outline: none;
    }

    button {
      width: 40px;
      height: 40px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: none;
      border-radius: 20px;

      cursor: pointer;
      outline: none;

      img {
        width: 20px;
      }
    }
  }
`;

export default SendMessageFormStyles;
