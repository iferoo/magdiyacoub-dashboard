import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { BiSearch } from 'react-icons/bi';

import PatientForm from './Patients.Form';

import { deletePatient, updatePatients } from '../../store/patientSlice';

import { ViewPatientSection } from '../../styles/Patients.Styled';

export default function ViewPatient() {
  const [patients, doctors, nurses, rooms, beds, dispatch] = useOutletContext();
  const [newBeds, setNewBeds] = useState([]);
  const [newPatients, setNewPatients] = useState(patients);
  const [activePatient, setActivePatient] = useState(0);

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

  const handleSearch = event => {
    const newPatientsList = patients.filter(patient =>
      patient.Name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setNewPatients(newPatientsList);
  };

  const handleDelete = () => {
    dispatch(deletePatient(activePatient));
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

  const onSubmit = patient => {
    dispatch(updatePatients(patient.patient));
  };

  useEffect(() => {
    setNewPatients(patients);
  }, [patients]);

  const patientsList = patients => {
    return newPatients.map(patient => (
      <div
        className="patient"
        key={patient.id}
        onClick={() => {
          const filteredBeds = beds.filter(
            bed => bed.RoomID === patient.Bed.RoomID.id
          );
          setNewBeds(filteredBeds);

          setActivePatient(patient);

          setTimeout(() => {
            setValue('patient', {
              id: patient.id,
              Img: patient.Img,
              Name: patient.Name,
              MedicalID: null,
              Room: patient.Bed.RoomID.id,
              Bed: patient.Bed.id,
              Status: patient.Status,
              Condition: patient.Condition,
              Age: patient.Age,
              Gender: patient.Gender,
              RegisterDate: patient.RegisterDate,
              Branch: patient.Branch,
              Nurse: patient.Nurse.id,
              Doctor: patient.Doctor.id,
              Disease: patient.Disease,
              History: patient.History,
              OtherDiseases: patient.OtherDiseases,
              Diabeyic: patient.Diabeyic,
              Smoker: patient.Smoker,
            });
          }, 1);
        }}
      >
        <div
          className={activePatient.id === patient.id ? 'active' : 'nonActive'}
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
              onChange={e => handleSearch(e)}
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
          register={register}
          handleSubmit={handleSubmit}
          newBeds={newBeds}
          setNewBeds={setNewBeds}
          isDelete={true}
          handleDelete={handleDelete}
        />
      </div>
    </ViewPatientSection>
  );
}
