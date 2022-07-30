import styled from 'styled-components';

export const SideBar = styled.section`
  height: 100vh;
  width: 18vw;
  box-shadow: 1px 1px 5px #888888;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.primary};
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  .top {
    width: 100%;

    .responsive {
      display: flex;
      justify-content: center;
      .brand {
        width: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px 5px #888888;
        padding: 0.2rem 1rem;
        border-radius: 1rem;
        background-color: #fff;

        span img {
          width: 80px;
        }
      }
    }

    .toggle {
      display: none;
      svg {
        cursor: pointer;
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem 0;
      a {
        width: 50%;
        padding: 1rem 1rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        color: ${({ theme }) => theme.fontsColors.secondary};
        &:hover {
          color: ${({ theme }) => theme.fontsColors.primary};
        }
      }

      .active {
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.colors.third};
        color: ${({ theme }) => theme.colors.primary};
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      a {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 0;

    .top {
      padding: 1rem 0;

      .responsive {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .toggle {
          width: 10%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${({ theme }) => theme.fontsColors.primary};
          z-index: 10;
          svg {
            font-size: 1.4rem;
          }
        }
        .brand {
          gap: 1rem;
          width: 20%;
          justify-content: center;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }

      .links {
        position: fixed;
        top: -20rem;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        a {
          width: 50%;
          margin: 0 auto;
          border-radius: 0.6rem;
          display: flex;
          justify-content: center;
        }
      }
      .showLinks {
        position: initial;
      }
    }

    .logout {
      position: fixed;
      top: -15rem;
      margin: 1rem 0;
    }
    .showLogout {
      position: initial;
      top: 0rem;
    }
  }
`;
