import React, { useState } from 'react';
import { addRoom } from '../../store/roomSlice';

export default function RoomsAdd({ dispatch }) {
  const [roomName, setRoomName] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    dispatch(addRoom({ Name: roomName }));
    setRoomName('');
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="roomEdit">
        <input
          type={'text'}
          value={roomName}
          onChange={event => setRoomName(event.target.value)}
        />
        <button
          className="submitButton"
          onClick={event => {
            onSubmit(event);
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}
