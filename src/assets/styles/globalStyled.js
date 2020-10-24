import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;

    &::after,
    &::before {
      content: '';
      clear: both;
      display: none;
      visibility: hidden;
    }
  }

  html,
  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 10px;
  }
`;
