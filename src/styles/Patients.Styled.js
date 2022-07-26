import styled from 'styled-components';

export const AddPatientSection = styled.section`
  width: 100%;
  box-shadow: 0px 0px 1px 1px #888888;
  .line {
    width: 80%;
    margin: 0 auto;
    border: 0.3px solid #b9b9b9;
    border-radius: 1rem;
  }

  input,
  select {
    padding: 0.5rem;

    &::placeholder {
    }
    &:focus {
    }
  }

  .patientProfile {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .patientImage {
      width: 40%;
      position: relative;
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
      input {
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0;
      }
    }

    .profile {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      .name {
        font-weight: 600;
      }
      .room {
        font-weight: 400;
        font-size: 0.8rem;
      }
      .status {
        font-weight: 400;
        font-size: 0.8rem;
      }
      .condition {
        font-weight: 400;
        font-size: 0.8rem;
        color: green;
      }
    }
  }
  .patientInfo {
    padding: 1rem 3rem;
    .Info {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
    .leftInfo {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      p {
        font-size: 1rem;
        span {
          font-weight: bold;
        }
      }
    }
    .rightInfo {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      p {
        font-size: 1rem;
        span {
          font-weight: bold;
        }
      }
    }
  }
  

  .inputAlign {
    display: flex;
    align-items: center;
    gap: 1rem;
    label {
      width: 40%;
    }
    input {
      width: 60%;
    }
    select {
      width: 60%;
    }
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 2rem;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .patientProfile {
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      padding: 1rem;
      img {
        width: 50%;
      }
      .profile {
        width: 100%;
      }
      .patientImage {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
    .patientInfo {
      padding: 1rem;
      .Info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.3rem;
      }
      .leftInfo {
        width: 100%;
        justify-content: center;
      }
      .rightInfo {
        width: 100%;
        justify-content: center;
      }
    }
  }
`;

export const ViewPatientSection = styled.section`
  display: flex;
  justify-content: space-between;

  .left {
    width: 30%;
    .search {
      /* display: flex;
      flex-direction: column;
      align-items: flex-start; */
      /* gap: 0.5rem; */
      .search-input {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.fourth};
        border-radius: 1rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.primary};

        svg {
          width: 20%;
          font-size: 1.5rem;
          color: ${({ theme }) => theme.colors.primary};
        }
        input {
          width: 80%;
          background-color: transparent;
          border: none;
          color: ${({ theme }) => theme.colors.primary};
          &::placeholder {
            color: ${({ theme }) => theme.colors.primary};
          }
          &:focus {
            outline: none;
          }
        }
      }
      label {
        padding-left: 1rem;
        font-size: 0.8rem;
      }
    }
    .result {
      overflow-y: scroll;
      height: 100vh;
      .patient {
        cursor: pointer;
        display: flex;
        align-items: baseline;
        padding: 0.5rem;
        .active {
          margin: 0.4rem;
          width: 10px;
          height: 10px;
          background-color: ${({ theme }) => theme.colors.third};
          border-radius: 50%;
        }
        .nonActive {
          margin: 0.4rem;
          width: 10px;
        }
        .info {
          display: flex;
          flex-direction: column;
          h6,
          h3,
          p {
            margin: 0.1rem;
          }
          h6 {
            font-weight: 200;
          }
          p {
            color: green;
            font-size: 0.8rem;
            font-weight: 400;
          }
        }
      }
    }
    .result::-webkit-scrollbar {
      width: 8px;
    }
    .result::-webkit-scrollbar-thumb {
      background: #888888;
      border-radius: 8px;
    }
    .result::-webkit-scrollbar-track {
      background: #ffffff;
    }
  }
  .right {
    width: 65%;
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    flex-direction: column;
    .left {
      .result {
        height: 50vh;
      }
    }
    .right {
      flex-direction: row;
      gap: 2rem;
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    flex-direction: column;
    .left {
      .result {
        height: 50vh;
      }
    }

    .right {
      width: 100%;
      .patientProfile {
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        gap: 2rem;
        img {
          width: 30vh;
          height: 30vh;
        }
        .profile {
          width: 100%;
        }
      }
      .patientInfo {
        padding: 1rem;

        .Info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.3rem;
        }
        .leftInfo {
          width: 100%;
          justify-content: center;
        }
        .rightInfo {
          width: 100%;
          justify-content: center;
        }
      }
      /* .submit {
        input,
        button {
          border-radius: 0.5rem !important; 
        }
      } */
      .other {
        padding: 1rem;
        .info {
          display: flex;
          align-items: center;
          svg {
            font-size: 1.5rem;
          }
          p {
            font-weight: 600;
          }
        }
      }
    }
  }
`;
