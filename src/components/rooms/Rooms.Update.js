import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import React from 'react';

import styled from 'styled-components';
import { useForm } from 'react-hook-form';

export default function UpdateRooms() {
  const roomToggle = id => {
    document.querySelectorAll(`#${id}`).forEach(element => {
      element.classList.toggle('hide');
    });
  };

  const {
    register,
    handleSubmit,
    // setValue,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      room: {
        id: '',
        name: '',
        bed: '',
      },
    },
  });

  const {
    register: bedRegister,
    // handleSubmit: bedHandleSubmit,
    // setValue: bedSetValue,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      bed: {
        RoomID: 0,
        BedID: 0,
      },
    },
  });

  const onSubmit = data => {};
  // console.log(errors);

  // const handleRemoveRoom = () => {};

  const onSubmitBed = data => {};
  // console.log(errors);
  return (
    <Section>
      <div className="rooms">
        <div className="address">
          <h3 className="name">Room</h3>
          <IoMdArrowDropright
            id="addRoom"
            onClick={() => {
              roomToggle('addRoom');
            }}
          />
          <IoMdArrowDropdown
            id="addRoom"
            className="hide"
            onClick={() => {
              roomToggle('addRoom');
            }}
          />
        </div>

        <div id={'addRoom'} className={`roomInfo hide`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="profile">
              <div className="inputAlign">
                <label htmlFor="roomID">Name</label>
                <select {...register('room.id', {})}>
                  <option value="none" style={{ display: 'none' }}></option>
                  <option>One</option>
                </select>
              </div>
              <div className="inputAlign">
                <label htmlFor="roomName">New Name</label>
                <input
                  id="roomName"
                  type="text"
                  placeholder="enter new name"
                  {...register('room.name', { required: true })}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="bed">Number Of Bed</label>
                <input
                  id="bed"
                  type="text"
                  placeholder=""
                  {...register('room.bed', { required: true, disabled: true })}
                />
              </div>
            </div>
            <div className="line"></div>
            <div className="submit">
              <input type="submit" value="Update" />
            </div>
          </form>
          <div className="submit">
            <button id="remove" className="submit">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="rooms">
        <div className="address">
          <h3 className="name">Bed</h3>
          <IoMdArrowDropdown
            id="addBed"
            className="hide"
            onClick={() => {
              roomToggle('addBed');
            }}
          />
          <IoMdArrowDropright
            id="addBed"
            onClick={() => {
              roomToggle('addBed');
            }}
          />
        </div>
        <div id={'addBed'} className={`roomInfo hide`}>
          <form>
            <div className="profile">
              <div className="inputAlign">
                <label htmlFor="room">Room</label>
                <select id="room" {...bedRegister('bed.RoomID', {})}>
                  <option value="none" style={{ display: 'none' }}></option>
                  <option>One</option>
                </select>
              </div>
              <div className="inputAlign">
                <label htmlFor="bed">Bed</label>
                <select id="bed" {...bedRegister('bed.BedID', {})}>
                  <option value="none" style={{ display: 'none' }}></option>
                  <option>One</option>
                </select>
              </div>
            </div>
            <div className="line"></div>
            <div className="submit">
              <button
                id="remove"
                className="submit"
                onClick={() => onSubmitBed()}
              >
                Remove
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 0.5rem;
  width: 100%;
  .line {
    width: 80%;
    margin: 0 auto;
    border: 0.3px solid #b9b9b9;
    border-radius: 1rem;
  }
  .hide {
    display: none;
  }
  .address {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      font-size: 2rem;
    }
  }
  input,
  select,
  button {
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
  .submit {
    padding: 0 3rem;
    input,
    button {
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
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
      }
    }
    #remove {
      background-color: var(--red);
    }
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    form {
      .profile {
        padding: 1rem;
        gap: 1rem;
      }
    }
    .submit {
      padding: 0 1rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    form {
      .profile {
        padding: 1rem;
        gap: 1rem;
      }
    }
    .submit {
      padding: 0 1rem;
    }
  }
`;
