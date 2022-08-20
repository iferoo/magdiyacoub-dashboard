import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background-color: ${({ theme }) => theme.colors.parimary};
  color:${({ theme }) => theme.fontsColors.secondary};
  
}

/* p, h1, h2, h3, svg, div, section, a{
  transition: all 0.5s linear;
}  */
`;

export const PageSection = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.third};
  min-height: 100vh;

  .container {
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 5px #888888;
    padding: 1rem;
    h2 {
      font-weight: 400;
    }
    .top {
      padding: 1rem;
      border-bottom: 1px solid #888888;
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: space-between;
      div {
        display: flex;
        gap: 1rem;

        a,
        .date a {
          text-decoration: none;
          /* border: 1px solid black; */
          border-radius: 1rem;
          padding: 0.5rem;
          color: ${({ theme }) => theme.fontsColors.secondary};
          &:hover {
            color: ${({ theme }) => theme.fontsColors.primary};
          }
        }
        .active {
          background-color: ${({ theme }) => theme.colors.secondary};
          color: ${({ theme }) => theme.colors.primary};
          &:hover {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
    .down {
      padding: 1rem;
    }
  }

  .submitButton {
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.third};
    text-align: center;
    border: none;
    border-radius: 1rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
      color: #fff;
      background-color: #0b5ed7;
      border-color: #0a58ca;
    }
  }

  .submit {
    padding: 1rem 3rem;
    input {
      width: 100%;
      margin: 0.5rem auto;
      cursor: pointer;
      color: #fff;
      text-align: center;
      background-color: #0d6efd;
      border-color: #0d6efd;
      font-size: 1rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      border: none;
      border-radius: 0.2rem;
      padding: 0.5rem;
      &:hover {
        /* color: #fff; */
        background-color: #0b5ed7;
        border-color: #0a58ca;
      }
    }
    .delete {
      background-color: ${({ theme }) => theme.colors.secondary};
      &:hover {
        background-color: #db1b1e;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    padding: 1rem;
    .container {
      .down {
        padding: 1rem 0 0 0;
        flex-direction: column;
        gap: 2rem;
        .left {
          width: 100%;
        }
        .right {
          width: 100%;
        }
      }
    }
  }
`;

export const Loading = styled.section`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  #img {
    width: 120px;
    height: 100px;
    animation: rotate 2s infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyles;
