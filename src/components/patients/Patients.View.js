import React from 'react';

import { BiSearch } from 'react-icons/bi';

import { useForm } from 'react-hook-form';
import AddPatient from './Patients.Form';

import { ViewPatientSection } from '../../styles/Patients.Styled';

export default function ViewPatient() {
  const {
    // register,
    // handleSubmit,
    // setValue,
    // getValues,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      patient: {
        id: null,
        Img: null,
        Name: '',
        MedicalID: null,
        Room: '',
        Bed: '',
        Status: '',
        Condition: '',
        Age: null,
        Gender: '',
        RegisterDate: '',
        Branch: '',
        Nurse: '',
        Doctor: '',
        Disease: null,
        History: '',
        OtherDiseases: '',
        Diabeyic: false,
        Smoker: false,
      },
    },
  });

  // const onSubmit = data => {};
  // console.log(errors);

  // const handleRemove = () => {};

  const handleSearch = event => {};

  return (
    <ViewPatientSection>
      <div className="left">
        <div className="search">
          <div className="search-input">
            <BiSearch />
            <input
              type="text"
              name="patient"
              id="patient"
              placeholder="Search by patient name"
              autoComplete="off"
              onChange={handleSearch}
            />
          </div>
          <label htmlFor="patient">Sort patient by Patient ID</label>
        </div>

        <div className="result">
          <div className="patient">
            <div className={'active'}></div>
            <div className="info">
              <h3>Ahmed Mohamed</h3>
              <h6>Patient ID: 1</h6>
              <p>Room: 401</p>
            </div>
          </div>
          <div className="patient">
            <div className={'nonActive'}></div>
            <div className="info">
              <h3>Ahmed Mohamed</h3>
              <h6>Patient ID: 1</h6>
              <p>Room: 401</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="right">
        <AddPatient />
      </div>
    </ViewPatientSection>
  );
}
