import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PageSection } from '../../styles/Global';

import Loading from '../Loading';

import { getDoctors } from '../../store/doctorSlice';
import { getNurses } from '../../store/nurseSlice';

export default function StaffPage() {
  const dispatch = useDispatch();

  const { doctors } = useSelector(state => state.doctors);
  const { nurses } = useSelector(state => state.nurses);

  const isNursesLoading = useSelector(state => state.nurses.isLoading);
  const isDoctorsLoading = useSelector(state => state.doctors.isLoading);

  useEffect(() => {
    dispatch(getDoctors());
    dispatch(getNurses());
  }, [dispatch]);

  return (
    <PageSection>
      <div className="container">
        <div className="top">
          <h2>Staff</h2>
          <div>
            <NavLink to="view">View</NavLink>
            <NavLink to="update">Update</NavLink>
            <NavLink to="add">Add</NavLink>
          </div>
        </div>

        <div className="down">
          {isDoctorsLoading && isNursesLoading ? (
            <Loading />
          ) : (
            <Outlet context={[doctors, nurses, dispatch]} />
          )}
        </div>
      </div>
    </PageSection>
  );
}
