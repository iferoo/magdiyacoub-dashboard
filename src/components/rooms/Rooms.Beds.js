import React, { useEffect } from 'react';

import { BiBed } from 'react-icons/bi';
import { IoMdAddCircle } from 'react-icons/io';

import { deleteRoomBed } from '../../store/roomSlice';
import { insertRoomBed } from '../../store/roomSlice';

export default function RoomsBeds({ beds, dispatch, room }) {

  return (
    <>
      <div id={`room${room.id}`} className={`roomInfo hide`}>
        {beds.map(bed => (
          <div
            className={`beds ${bed.Patient == null ? 'free' : ''}`}
            key={bed.id}
            onDoubleClick={() => dispatch(deleteRoomBed(bed))}
          >
            <p>{bed.Patient == null ? '--' : bed.Patient.Name}</p>
            <BiBed />
            <p>{bed.Patient == null ? 'free' : 'full'}</p>
          </div>
        ))}
        <IoMdAddCircle
          id="add"
          onClick={() =>
            dispatch(
              insertRoomBed({
                Patient: null,
                RoomID: room.id,
              })
            )
          }
        />
      </div>
    </>
  );
}
