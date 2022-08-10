import React from 'react';
import { useOutletContext } from 'react-router-dom';

import { ChartsSection } from '../../styles/Analytics.Styled';
import AnalyticsBeds from './Analytics.Beds';
import AnalyticsPatients from './Analytics.Patients';
import AnalyticsStaff from './Analytics.Staff';

export default function TodayAnalytics() {
  const [patients, beds, doctors, nurses] = useOutletContext();

  //beds
  const freeBeds = beds.filter(bed => bed.Patient === null).length;

  const bedsData = [
    { name: 'Full', value: beds.length - freeBeds },
    { name: 'Free', value: freeBeds },
  ];

  //staff
  const onDutyDoctors = doctors.filter(
    doctor => doctor.Status === 'onDuty'
  ).length;

  const nextShiftDoctors = doctors.filter(
    doctor => doctor.Status === 'nextShift'
  ).length;

  const vacationDoctors = doctors.filter(
    doctor => doctor.Status === 'vacation'
  ).length;

  const onDutyNurses = nurses.filter(
    nurse => nurse.Status === 'onDuty'
  ).length;

  const nextShiftNurses = nurses.filter(
    nurse => nurse.Status === 'nextShift'
  ).length;

  const vacationNurses = nurses.filter(
    nurse => nurse.Status === 'vacation'
  ).length;


  const staffData = [
    {
      name: 'On Duty',
      Doctors: onDutyDoctors,
      Nurses: onDutyNurses,
    },
    {
      name: 'Next Shift',
      Doctors: nextShiftDoctors,
      Nurses: nextShiftNurses,
    },
    {
      name: 'Vacation',
      Doctors: vacationDoctors,
      Nurses: vacationNurses,
    },
  ];
  return (
    <ChartsSection>
      <AnalyticsPatients />
      <AnalyticsBeds data={bedsData} />
      <AnalyticsStaff data={staffData} />
    </ChartsSection>
  );
}
