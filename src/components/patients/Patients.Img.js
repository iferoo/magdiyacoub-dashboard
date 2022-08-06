import React, { useState } from 'react';

export default function PatientsImg({ img, onImgChange }) {
  return (
    <div className="patientImage">
      <input
        type="file"
        accept="image/jpeg,image/png,image/gif"
        onChange={event => {
          onImgChange(event);
        }}
      />
      <img src={img === null ? 'assets/Patient.png' : img} alt="patient" />
    </div>
  );
}
