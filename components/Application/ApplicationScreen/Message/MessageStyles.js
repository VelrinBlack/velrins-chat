import styled from 'styled-components';

const MessageStyles = styled.div`
  margin: 40px 20px -30px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &.receiver {
    align-self: flex-start;

    p {
      background-image: none;
      background-color: #e4e4e4;
      color: #000;
    }

    time {
      align-self: flex-start;
    }
  }

  p {
    width: max-content;
    max-width: clamp(300px, 35vw, 1000px);
    padding: 10px 20px;

    background-image: linear-gradient(to right, #1f8cae 0%, #1b6177 0.01%, #0a3745 100%);
    border-radius: 20px;

    color: #fff;
  }

  time {
    margin: 0 20px;

    color: #8b8b8b;
    font-size: 14px;
  }
`;

export default MessageStyles;
