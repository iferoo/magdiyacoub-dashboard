import styled from 'styled-components';

export const AnalyticsSection = styled.section`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  .char {
    .charTitle {
      padding: 1rem 1rem;
      h1 {
        font-size: 2rem;
        font-weight: 500;
      }
    }

    .charInfo {
      padding: 1rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      div {
        display: flex;
        justify-content: space-around;
        span {
          width: 5%;
        }
        p {
          width: 80%;
        }
        .Dangerous {
          background-color: #ff2828;
        }
        .Stable {
          background-color: #00c49f;
        }
        .Under {
          background-color: #a1df3f;
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

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
