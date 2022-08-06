import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { addPatients } from '../../store/patientSlice';
import PatientForm from './Patients.Form';

export default function PatientsAdd() {
  const [patients, doctors, nurses, rooms, beds, dispatch] = useOutletContext();
  const onSubmit = patient => {
    dispatch(addPatients(patient.patient))
    console.log(patient.patient);
  };
  return (
    <PatientForm
      value="add"
      onSubmit={onSubmit}
      doctors={doctors}
      nurses={nurses}
      rooms={rooms}
      beds={beds}
    />
  );
}
