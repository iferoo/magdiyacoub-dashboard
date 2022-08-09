import React, { useState } from 'react';
import { AddPatientSection } from '../../styles/Patients.Styled';

export default function PatientForm({
  value,
  onSubmit,
  doctors,
  nurses,
  rooms,
  beds,
  register,
  handleSubmit,
  getValues,
  newBeds,
  setNewBeds,
  isDelete,
  handleDelete,
}) {
  const [img, setImg] = useState(null);

  const onImgChange = event => {
    setImg(URL.createObjectURL(event.target.files[0]));
    // setValue('patient.Img', event.target.files[0]);
  };

  return (
    <AddPatientSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="patientProfile">
          <div className="patientImage">
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              onChange={event => {
                onImgChange(event);
              }}
              {...register('patient.Img', {})}
            />
            <img
              src={img === null ? 'assets/Patient.png' : img}
              alt="patient"
            />
          </div>

          <div className="profile">
            <div className="inputAlign">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder=""
                {...register('patient.Name' /* { required: true } */)}
              />
            </div>
            <div className="inputAlign">
              <label htmlFor="room">Room</label>
              <select
                id="room"
                type="text"
                placeholder=""
                onChangeCapture={event => {
                  const filteredBeds = beds.filter(
                    bed => bed.RoomID === parseInt(event.target.value)
                  );
                  setNewBeds(filteredBeds);
                }}
                {...register('patient.Room' /* { required: true } */)}
              >
                <option value="none" style={{ display: 'none' }}></option>
                {rooms.map(room => (
                  <option key={room.id} value={room.id}>
                    {room.Name}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputAlign">
              <label htmlFor="bed">Bed</label>
              <select
                id="bed"
                type="text"
                placeholder=""
                {...register('patient.Bed' /* { required: true } */)}
              >
                <option value="none" style={{ display: 'none' }}></option>
                {newBeds.map(bed => (
                  <option
                    key={bed.id}
                    value={bed.id}
                    disabled={bed.Patient !== null}
                  >
                    {bed.id}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputAlign">
              <label htmlFor="status">Status</label>
              <input
                id="status"
                type="text"
                placeholder=""
                {...register('patient.Status' /* { required: true } */)}
              />
            </div>
            <div className="inputAlign">
              <label htmlFor="condition">Condition</label>
              <select
                id="condition"
                type="text"
                placeholder=""
                {...register('patient.Condition', {})}
              >
                <option value="Stable">Stable</option>
                <option value="Dangerous">Dangerous</option>
                <option value="UnderControl">Under Control</option>
              </select>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="patientInfo">
          <h3 className="name">Patient info</h3>
          <div className="Info">
            <div className="leftInfo">
              <div className="inputAlign">
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  type="number"
                  placeholder=""
                  {...register('patient.Age' /* { required: true } */)}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  {...register('patient.Gender' /* { required: true } */)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="inputAlign">
                <label htmlFor="name">Register Date</label>
                <input
                  type="date"
                  placeholder=""
                  {...register('patient.RegisterDate' /* { required: true } */)}
                />
              </div>
            </div>
            <div className="rightInfo">
              <div className="inputAlign">
                <label htmlFor="branch">Branch</label>
                <select
                  {...register('patient.Branch' /* { required: true } */)}
                >
                  <option value="Aswan Sail">Aswan Sail</option>
                </select>
              </div>
              <div className="inputAlign">
                <label htmlFor="nurse">Nurse</label>
                <select
                  type="text"
                  placeholder=""
                  {...register('patient.Nurse' /* { required: true } */)}
                >
                  <option value="none" style={{ display: 'none' }}></option>
                  {nurses.map(nurse => (
                    <option key={nurse.id} value={nurse.id}>
                      {nurse.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputAlign">
                <label htmlFor="doctor">Doctor</label>
                <select
                  type="text"
                  placeholder=""
                  {...register('patient.Doctor' /* { required: true } */)}
                >
                  <option value="none" style={{ display: 'none' }}></option>
                  {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="patientInfo">
          <h3 className="name">Medical Conditon</h3>
          <div className="Info">
            <div className="leftInfo">
              <div className="inputAlign">
                <label htmlFor="disease">Disease</label>
                <input
                  type="text"
                  placeholder=""
                  {...register('patient.Disease' /* { required: true } */)}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="history">History</label>
                <input
                  type="date"
                  placeholder=""
                  {...register('patient.History' /* { required: true } */)}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="otherDiseases">Other Diseases</label>
                <input
                  type="text"
                  placeholder=""
                  {...register(
                    'patient.OtherDiseases' /* { required: true } */
                  )}
                />
              </div>
            </div>
            <div className="rightInfo">
              <div className="inputAlign">
                <label htmlFor="diabeyic">Diabeyic</label>
                <input
                  type="checkbox"
                  placeholder=""
                  {...register('patient.Diabeyic', {})}
                />
              </div>
              <div className="inputAlign">
                <label htmlFor="smoker">Smoker</label>
                <input
                  type="checkbox"
                  placeholder=""
                  {...register('patient.Smoker', {})}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="submit">
          <input type="submit" value={value} />
          {isDelete === true ? (
            <input
              type="button"
              value="delete"
              className="delete"
              onClick={() => handleDelete()}
            />
          ) : (
            <></>
          )}
        </div>
      </form>
    </AddPatientSection>
  );
}
