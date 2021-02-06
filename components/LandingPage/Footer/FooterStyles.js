import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100%;
  min-height: 33px;
  background-color: #2c2c2c;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 60px;
    flex-direction: column;
  }

  span {
    color: #fff;
    font-size: 13px;
    margin: 0 5px;

    &.email {
      font-weight: 200;
      font-style: italic;
    }
  }
`;

export default FooterStyles;
