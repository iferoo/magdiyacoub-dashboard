import styled from 'styled-components';
import { PageSection } from './Global';

export const AnalyticsSection = styled(PageSection)`
  .widgetContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    .widget {
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: 1rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      padding: 1rem 0rem;
      color: white;
      .icon {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 50%;
      }
      svg {
        color: black;
      }
    }
  }
`;

export const ChartsSection = styled.section`
  padding: 1rem 2rem;
  /* display: flex;
  justify-content: space-between; */
  .char {
    .charTitle {
      padding: 1rem;
      h1 {
        font-size: 2rem;
        font-weight: 500;
      }
    }
    .charGraph {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .charInfo {
        /* padding: 1rem; */
        display: flex;
        flex-direction: column;
        gap: 1rem;
        div {
          display: flex;
          justify-content: space-around;
          gap: 1rem;
          span {
            width: 0.5rem;
          }
          p {
            width: 60%;
          }
          .Free {
            background-color: green;
          }
          .Full {
            background-color: #888888;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
