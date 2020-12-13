import styled from 'styled-components';

const NavigationCardStyles = styled.div`
  padding: 20px 0 20px 10px;

  display: flex;

  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #14576b;
  }

  img {
    width: 50px;
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
`;

export default NavigationCardStyles;
