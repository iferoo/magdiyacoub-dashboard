import styled from 'styled-components';

export const ViewRoomsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  .rooms {
    .address {
      display: flex;
      align-items: center;
      gap: 1rem;
      svg {
        font-size: 2rem;
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
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    gap: 0rem;
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
  }
`;
