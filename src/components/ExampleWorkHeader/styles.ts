import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperHeader = styled.div`
  background: linear-gradient(180deg, #ffff 50%, #34e64fff 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  h1 {
    font-size: 40px;
    font-weight: bold;
  }

  div {
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
  }

  button {
    margin: 5px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    color: black;
    cursor: pointer;
  }
  button:hover {
    background-color: #34e64fff;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: black;
`;
