import React, { useState } from 'react';

import { BiSearch } from 'react-icons/bi';

import { ViewPatientSection } from '../../styles/Patients.Styled';
import { useOutletContext } from 'react-router-dom';
import PatientForm from './Patients.Form';

export default function ViewPatient() {
  const [patients, doctors, nurses, rooms, beds] = useOutletContext();

  const [activePatient, setActivePatient] = useState(0);

  const handleSearch = event => {};

  const onSubmit = patient => {
    console.log(patient);
  };

  const patientsList = patients => {
    return patients.map(patient => (
      <div
        className="patient"
        key={patient.id}
        onClick={() => setActivePatient(patient.id)}
      >
        <div
          className={activePatient === patient.id ? 'active' : 'nonActive'}
        ></div>
        <div className="info">
          <h3>{patient.Name}</h3>
          <h6>Patient ID: {patient.id}</h6>
          <p>Room: {patient.Bed.RoomID.Name}</p>
        </div>
      </div>
    ));
  };

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

        <div className="result">{patientsList(patients)}</div>
      </div>

      <div className="right">
        <PatientForm
          value="update"
          onSubmit={onSubmit}
          doctors={doctors}
          nurses={nurses}
          rooms={rooms}
          beds={beds}
        />
      </div>
    </ViewPatientSection>
  );
}
