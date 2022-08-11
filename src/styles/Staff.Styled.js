import styled from 'styled-components';

export const StaffSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .staffType {
    margin-bottom: 1rem;
    h3 {
      font-size: 1.5rem;
      font-weight: 200;
    }
  }
  .staffInfo {
    display: flex;
    justify-content: space-between;
    table {
      border-collapse: collapse;
      width: 30%;
      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
    }
    .duty {
      background-color: green;
      color: white;
    }
    .shift {
      background-color: yellowgreen;
      color: white;
    }
    .vacation {
      background-color: burlywood;
      color: white;
    }
  }

  .line {
    width: 80%;
    margin: 0 auto;
    border: 0.3px solid #b9b9b9;
    border-radius: 1rem;
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
  }
`;

export const AddStaffSection = styled.section`
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
  .profile {
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    .inputAlign {
      display: flex;
      align-items: center;
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
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .profile {
      padding: 1rem;
    }
    .submit {
      padding: 1rem;
    }
  }
`;
