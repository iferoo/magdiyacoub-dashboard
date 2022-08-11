import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import styled from 'styled-components';
import { updateDoctor } from '../../store/doctorSlice';

export default function UpdateStaff() {
  const dispatch = useDispatch();
  const [doctors, nurses] = useOutletContext();

  const [staff, setStaff] = useState([]);
  const [selectedField, setSelectedField] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      staff: {
        Type: null,
        id: null,
        Name: null,
        Age: null,
        Gender: '',
        Status: '',
      },
    },
  });

  const onSubmit = data => {
    data.staff.Type === 'Doctor'
      ? dispatch(updateDoctor(data.staff))
      : dispatch(updateDoctor(data.staff));
    setValue('staff', {
      Name: '',
      id: null,
      Age: null,
      Gender: '',
      Type: '',
      Status: '',
    });
  };
  // console.log(errors);

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="profile">
          <div className="inputAlign">
            <label htmlFor="type">Type</label>
            <select
              onChangeCapture={e => {
                setSelectedField(e.target.value);

                e.target.value === 'Doctor'
                  ? setStaff(doctors)
                  : setStaff(nurses);

                setValue('staff', {
                  id: null,
                  Name: null,
                  Age: null,
                  Gender: '',
                  Status: '',
                });
              }}
              {...register('staff.Type', {})}
            >
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
            </select>
          </div>
          <div className="inputAlign">
            <label htmlFor="id">Staff Name</label>
            <select
              onClick={event => {
                selectedField === 'Doctor'
                  ? setValue('staff', {
                      Name: doctors.find(
                        doctor => doctor.id === parseInt(event.target.value)
                      ).Name,
                      Age: doctors.find(
                        doctor => doctor.id === parseInt(event.target.value)
                      ).Age,
                      Gender: doctors.find(
                        doctor => doctor.id === parseInt(event.target.value)
                      ).Gender,
                      Status: doctors.find(
                        doctor => doctor.id === parseInt(event.target.value)
                      ).Status,
                    })
                  : setValue('staff', {
                      Name: nurses.find(
                        nurse => nurse.id === parseInt(event.target.value)
                      ).Name,
                      Age: nurses.find(
                        nurse => nurse.id === parseInt(event.target.value)
                      ).Age,
                      Gender: nurses.find(
                        nurse => nurse.id === parseInt(event.target.value)
                      ).Gender,
                      Status: nurses.find(
                        nurse => nurse.id === parseInt(event.target.value)
                      ).Status,
                    });
              }}
              {...register('staff.id', {})}
            >
              <option value="none" style={{ display: 'none' }}></option>

              {staff.map(staff => (
                <option key={staff.id} value={staff.id}>
                  {staff.Name}
                </option>
              ))}
            </select>
          </div>
          <div className="inputAlign">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder=""
              {...register('staff.Name', { required: true })}
            />
          </div>
          <div className="inputAlign">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              placeholder=""
              {...register('staff.Age', { required: true })}
            />
          </div>
          <div className="inputAlign">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              {...register('staff.Gender', {
                required: true,
                // disabled: true,
              })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="inputAlign">
            <label htmlFor="status">Status</label>
            <select
              {...register('staff.Status', {
                required: true,
              })}
            >
              <option value="onDuty">On Duty</option>
              <option value="nextShift">Next Shift</option>
              <option value="vacation">Vacation</option>
            </select>
          </div>
        </div>
        <div className="line"></div>
        <div className="submit">
          <input type="submit" value="Update" />
        </div>
      </form>
    </Section>
  );
}

const Section = styled.section`
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
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
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
