import React, { useState } from 'react';
import RoomsBeds from './Rooms.Beds';

import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';
import { FaRegEdit, FaMinus } from 'react-icons/fa';
import { deleteRoom, updateRoom } from '../../store/roomSlice';
import { AiOutlineCheck } from 'react-icons/ai';

export default function RoomList({ room, dispatch }) {
  const [isEdit, setIsEdit] = useState(false);
  const [roomName, setRoomName] = useState('');
  const roomToggle = id => {
    document.querySelectorAll(`#${id}`).forEach(element => {
      element.classList.toggle('hide');
    });
  };

  const Room = room => {
    return (
      <div className="rooms" key={room.id}>
        <div className="address">
          <h3 className="name">{room.Name}</h3>
          <div>
            <div className="roomButton" onClick={() => setIsEdit(!isEdit)}>
              <FaRegEdit />
            </div>
            <div
              className="roomButton"
              onClick={() => dispatch(deleteRoom(room))}
            >
              <FaMinus />
            </div>
            <div
              className="roomButton"
              onClick={() => {
                roomToggle(`room${room.id}`);
              }}
            >
              <IoMdArrowDropdown
                id={`room${room.id}`}
                className="hide"
                onClick={() => {
                  roomToggle(`room${room.id}`);
                }}
              />
              <IoMdArrowDropright
                id={`room${room.id}`}
                onClick={() => {
                  roomToggle(`room${room.id}`);
                }}
              />
            </div>
          </div>
        </div>
        <RoomsBeds room={room} beds={room.Beds} dispatch={dispatch} />
      </div>
    );
  };

  const onSubmit = () => {
    dispatch(updateRoom({ room: room, Name: roomName }));
    setIsEdit(!isEdit);
  };

  const updateRoomName = room => {
    return (
      <form onSubmit={onSubmit}>
        <div className="roomEdit">
          <input
            type={'text'}
            defaultValue={room.Name}
            onChange={event => setRoomName(event.target.value)}
          />
          <div
            className="roomButton"
            onClick={() => {
              onSubmit();
            }}
          >
            <AiOutlineCheck
              onClick={() => {
                onSubmit();
              }}
            />
          </div>
        </div>
      </form>
    );
  };

  return <>{isEdit ? updateRoomName(room) : Room(room)}</>;
}
