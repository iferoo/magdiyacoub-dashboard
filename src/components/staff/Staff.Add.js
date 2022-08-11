import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addDoctor } from '../../store/doctorSlice';
import { addNurse } from '../../store/nurseSlice';

import { AddStaffSection } from '../../styles/Staff.Styled';

export default function AddStaff() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      staff: {
        Name: '',
        Age: null,
        Gender: '',
        Type: '',
        Status: '',
      },
    },
  });

  const onSubmit = data => {
    data.staff.Type === 'Doctor'
      ? dispatch(addDoctor(data.staff))
      : dispatch(addNurse(data.staff));
    setValue('staff', {
      Name: '',
      Age: null,
      Gender: '',
      Type: '',
      Status: '',
    });
  };
  // console.log(errors);

  return (
    <AddStaffSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="profile">
          <div className="inputAlign">
            <label htmlFor="type">Type</label>
            <select
              {...register('staff.Type', {
                required: true,
              })}
            >
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
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
          <input type="submit" value="Add" />
        </div>
      </form>
    </AddStaffSection>
  );
}
