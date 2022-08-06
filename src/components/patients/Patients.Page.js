import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { PageSection } from '../../styles/Global';
import Loading from '../Loading';

import { getDoctors } from '../../store/doctorSlice';
import { getNurses } from '../../store/nurseSlice';
import { getPatients } from '../../store/patientSlice';
import { getRooms } from '../../store/roomSlice';

import { useDispatch, useSelector } from 'react-redux';
import { getBeds } from '../../store/bedSlice';

export default function PatientsPage() {
  const dispatch = useDispatch();

  const { patients } = useSelector(state => state.patients);
  const { doctors } = useSelector(state => state.doctors);
  const { nurses } = useSelector(state => state.nurses);
  const { rooms } = useSelector(state => state.rooms);
  const { beds } = useSelector(state => state.beds);
  const isPatientsLoading = useSelector(state => state.patients.isLoading);
  const isNursesLoading = useSelector(state => state.nurses.isLoading);
  const isDoctorsLoading = useSelector(state => state.doctors.isLoading);
  const isRoomsLoading = useSelector(state => state.rooms.isLoading);
  const isBedsLoading = useSelector(state => state.beds.isLoading);

  useEffect(() => {
    dispatch(getPatients());
    dispatch(getDoctors());
    dispatch(getNurses());
    dispatch(getRooms());
    dispatch(getBeds());
  }, [dispatch]);

  return (
    <PageSection>
      <div className="container">
        <div className="top">
          <h2>Patients</h2>
          <div>
            <NavLink to="/patients/view">View</NavLink>
            <NavLink to="/patients/add">Add</NavLink>
          </div>
        </div>

        <div className="down">
          {isPatientsLoading &&
          isDoctorsLoading &&
          isNursesLoading &&
          isRoomsLoading &&
          isBedsLoading ? (
            <Loading />
          ) : (
            <Outlet
              context={[patients, doctors, nurses, rooms, beds, dispatch]}
            />
          )}
        </div>
      </div>
    </PageSection>
  );
}
