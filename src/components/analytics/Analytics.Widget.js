import { FaBed, FaStethoscope } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import { TbNurse } from 'react-icons/tb';

export default function AnalyticsWidget() {
  return (
    <div className="widgetContainer">
      <div className="widget">
        <div className="icon">
          <FaBed />
        </div>
        Patients
        <br />
        100
      </div>
      <div className="widget">
        <div className="icon">
          <BiBed />
        </div>
        Beds
        <br />
        100
      </div>
      <div className="widget">
        <div className="icon">
          <FaStethoscope />
        </div>
        Doctors
        <br />
        100
      </div>
      <div className="widget">
        <div className="icon">
          <TbNurse />
        </div>
        Nurses
        <br />
        100
      </div>
    </div>
  );
}
