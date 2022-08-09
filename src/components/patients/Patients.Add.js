import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';

import { addPatients } from '../../store/patientSlice';

import PatientForm from './Patients.Form';

export default function PatientsAdd() {
  const [patients, doctors, nurses, rooms, beds, dispatch] = useOutletContext();

  const [newBeds, setNewBeds] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      patient: {
        id: null,
        Img: null,
        Name: '',
        MedicalID: null,
        Room: 'none',
        Bed: 'none',
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

  const onSubmit = patient => {
    dispatch(addPatients(patient.patient));
    setValue('patient', {
      id: null,
      Img: null,
      Name: '',
      MedicalID: null,
      Room: 'none',
      Bed: 'none',
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
    });
  };

  return (
    <PatientForm
      value="add"
      onSubmit={onSubmit}
      doctors={doctors}
      nurses={nurses}
      rooms={rooms}
      beds={beds}
      register={register}
      handleSubmit={handleSubmit}
      newBeds={newBeds}
      setNewBeds={setNewBeds}
    />
  );
}
