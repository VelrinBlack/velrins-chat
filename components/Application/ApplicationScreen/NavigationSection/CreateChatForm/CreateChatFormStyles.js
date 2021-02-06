import styled from 'styled-components';

const CreateChatButtonStyles = styled.div`
  form {
    height: 70px;
    display: flex;
    align-items: center;

    input {
      height: 40px;
      width: 70%;

      padding: 20px;

      border: none;
      border-radius: 20px;

      outline: none;
    }

    button {
      width: 40px;
      height: 40px;

      margin: 0 10px;

      background-color: transparent;
      border: none;

      outline: none;
      cursor: pointer;
    }
  }

  .create-chat {
    height: 70px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #0b495c;
    border: none;

    cursor: pointer;
    outline: none;

    img {
      width: 40px;
    }

    span {
      margin-left: 5px;
      color: #fff;
    }
  }
`;

export default CreateChatButtonStyles;
