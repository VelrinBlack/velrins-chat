import styled from 'styled-components';

const ChatSectionStyles = styled.main`
  flex: 1;
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  .chat_placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: clamp(300px, 40%, 800px);
  }

  header {
    height: 70px;

    display: flex;
    align-items: center;

    background-color: #e4e4e4;

    @media (max-width: 768px) {
      height: 60px;
    }

    button {
      width: 40px;
      height: 40px;
      margin-left: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: transparent;
      border: none;

      outline: none;
      cursor: pointer;

      img {
        width: 30px;
        height: 30px;
        margin: 0;
      }
    }

    img {
      width: 50px;
      height: 50px;
      margin-left: 10px;

      object-fit: cover;
      border-radius: 100%;

      @media (max-width: 768px) {
        width: 40px;
        height: 40px;
      }
    }

    h3 {
      margin-left: 10px;
      font-size: 18px;

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
  }

  .messages_section {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default ChatSectionStyles;
