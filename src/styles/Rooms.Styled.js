import styled from 'styled-components';

export const ViewRoomsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0rem;
  .rooms {
    .address {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* gap: 1rem; */
      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        svg {
          font-size: 2rem;
          &:active {
            animation: press 0.2s 1 linear;
          }
        }
        svg:first-child {
          font-size: 1.2rem;
          color: ${({ theme }) => theme.colors.third};
        }
        svg:nth-child(2) {
          font-size: 1.2rem;
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
    .roomInfo {
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.5rem;
      margin: 0 auto;
      .beds {
        color: #888888;
        display: flex;
        flex-direction: column;
        align-items: center;
        svg {
          font-size: 4rem;
        }
      }
      #add {
        font-size: 2rem;
      }
      #add:active {
        animation: press 0.2s 1 linear;
      }
      .free {
        color: green;
      }
      .close {
        color: var(--red);
      }
    }
    .hide {
      display: none;
    }
  }
  form {
    width: 100%;
  }
  .roomEdit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    svg {
      font-size: 1.2rem;
      margin-right: 2.5rem;
      color: green;
      &:active {
        animation: press 0.2s 1 linear;
      }
    }
    input {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.third};
      font-size: 1.2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.fontsColors.secondary};
      padding: 0.5rem 0.5rem 0rem 0;
      margin-bottom: 1rem;
      :focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    }
  }
  @keyframes press {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    to {
      transform: scale(1);
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    gap: 0rem;
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
  }
`;
