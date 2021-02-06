import styled from 'styled-components';

const MessageStyles = styled.div`
  margin: 40px 20px -30px 20px;
  width: min-content;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    margin: 40px 10px -30px 10px;
  }

  &.receiver {
    align-self: flex-start;

    p {
      background-image: none;
      background-color: #e4e4e4;
      color: #000;
    }
  }

  p {
    width: max-content;
    max-width: clamp(300px, 35vw, 1000px);
    padding: 10px 20px;

    background-image: linear-gradient(to right, #1f8cae 0%, #1b6177 0.01%, #0a3745 100%);
    border-radius: 20px;

    color: #fff;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  time {
    align-self: center;
    white-space: nowrap;

    color: #8b8b8b;
    font-size: 10px;
  }
`;

export default MessageStyles;
