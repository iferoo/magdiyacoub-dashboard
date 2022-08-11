import React from 'react';
import { useOutletContext } from 'react-router-dom';

import { StaffSection } from '../../styles/Staff.Styled';

export default function ViewStaff() {
  const [doctors, nurses] = useOutletContext();

  const doctorsFilterd = {
    onDuty: doctors.filter(doctor => doctor.Status === 'onDuty'),
    nextShift: doctors.filter(doctor => doctor.Status === 'nextShift'),
    vacation: doctors.filter(doctor => doctor.Status === 'vacation'),
  };

  const nursesFiltered = {
    onDuty: nurses.filter(Nurse => Nurse.Status === 'onDuty'),
    nextShift: nurses.filter(Nurse => Nurse.Status === 'nextShift'),
    vacation: nurses.filter(Nurse => Nurse.Status === 'vacation'),
  };

  return (
    <StaffSection>
      <div>
        <div className="staffType">
          <h3>Doctors</h3>
        </div>
        <div className="staffInfo">
          <table>
            <thead>
              <tr>
                <th className="duty">On duty</th>
              </tr>
            </thead>
            <tbody>
              {doctorsFilterd.onDuty.map(doctor => (
                <tr key={doctor.id}>
                  <td>{doctor.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th className="shift">Next Shift</th>
              </tr>
            </thead>
            <tbody>
              {doctorsFilterd.nextShift.map(doctor => (
                <tr key={doctor.id}>
                  <td>{doctor.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th className="vacation">Vacation</th>
              </tr>
            </thead>
            <tbody>
              {doctorsFilterd.vacation.map(doctor => (
                <tr key={doctor.id}>
                  <td>{doctor.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="staffType">
          <h3>Nurses</h3>
        </div>
        <div className="staffInfo">
          <table>
            <thead>
              <tr>
                <th className="duty">On duty</th>
              </tr>
            </thead>
            <tbody>
              {nursesFiltered.onDuty.map(nurse => (
                <tr key={nurse.id}>
                  <td>{nurse.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th className="shift">Next Shift</th>
              </tr>
            </thead>
            <tbody>
              {nursesFiltered.nextShift.map(nurse => (
                <tr key={nurse.id}>
                  <td>{nurse.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th className="vacation">Vacation</th>
              </tr>
            </thead>
            <tbody>
              {nursesFiltered.vacation.map(nurse => (
                <tr key={nurse.id}>
                  <td>{nurse.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </StaffSection>
  );
}
