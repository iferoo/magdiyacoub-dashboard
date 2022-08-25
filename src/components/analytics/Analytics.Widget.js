import { FaBed, FaStethoscope } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import { TbNurse } from 'react-icons/tb';

export default function AnalyticsWidget({ patients, beds, doctors, nurses }) {
  return (
    <div className="widgetContainer" data-aos="fade-up">
      <div className="widget">
        <div className="icon">
          <FaBed />
        </div>
        Patients
        <br />
        {patients}
      </div>
      <div className="widget">
        <div className="icon">
          <BiBed />
        </div>
        Beds
        <br />
        {beds}
      </div>
      <div className="widget">
        <div className="icon">
          <FaStethoscope />
        </div>
        Doctors
        <br />
        {doctors}
      </div>
      <div className="widget">
        <div className="icon">
          <TbNurse />
        </div>
        Nurses
        <br />
        {nurses}
      </div>
    </div>
  );
}
