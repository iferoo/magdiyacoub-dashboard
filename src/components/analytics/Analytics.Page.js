import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AnalyticsWidget from './Analytics.Widget';
import Loading from '../Loading';

import { AnalyticsSection } from '../../styles/Analytics.Styled';

import { getDoctors } from '../../store/doctorSlice';
import { getNurses } from '../../store/nurseSlice';
import { getPatients } from '../../store/patientSlice';
import { getBeds } from '../../store/bedSlice';

export default function AnalyticsPage() {
  const dispatch = useDispatch();

  const { patients } = useSelector(state => state.patients);
  const { doctors } = useSelector(state => state.doctors);
  const { nurses } = useSelector(state => state.nurses);
  const { beds } = useSelector(state => state.beds);

  const isPatientsLoading = useSelector(state => state.patients.isLoading);
  const isNursesLoading = useSelector(state => state.nurses.isLoading);
  const isDoctorsLoading = useSelector(state => state.doctors.isLoading);
  const isBedsLoading = useSelector(state => state.beds.isLoading);

  useEffect(() => {
    dispatch(getPatients());
    dispatch(getDoctors());
    dispatch(getNurses());
    dispatch(getBeds());
  }, [dispatch]);
  return (
    <AnalyticsSection>
      <div className="container">
        <div className="top">
          <h2>Analytics</h2>
        </div>

        <div className="down">
          {isPatientsLoading &&
          isDoctorsLoading &&
          isNursesLoading &&
          isBedsLoading ? (
            <Loading />
          ) : (
            <>
              <AnalyticsWidget
                patients={patients.length}
                beds={beds.length}
                doctors={doctors.length}
                nurses={nurses.length}
              />
              <Outlet context={[patients, beds, doctors, nurses]} />
            </>
          )}
        </div>
      </div>
    </AnalyticsSection>
  );
}
