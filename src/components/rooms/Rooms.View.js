import React, { useEffect } from 'react';

import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';
import { BiBed } from 'react-icons/bi';
import { IoMdAddCircle } from 'react-icons/io';
import { ViewRoomsSection } from '../../styles/Rooms.Styled';

export default function ViewRooms({ rooms }) {
  const roomToggle = id => {
    document.querySelectorAll(`#${id}`).forEach(element => {
      element.classList.toggle('hide');
    });
  };
  useEffect(() => {
    console.log(rooms);
  }, [rooms]);
  const onSubmitBed = roomID => {};
  return (
    <ViewRoomsSection>
      <div className="rooms">
        <div className="address">
          <h3 className="name">One</h3>
          <IoMdArrowDropdown
            id={'R1'}
            className="hide"
            onClick={() => {
              roomToggle('R1');
            }}
          />
          <IoMdArrowDropright
            id={'R1'}
            onClick={() => {
              roomToggle('R1');
            }}
          />
        </div>
        <div id={'R1'} className={`roomInfo hide`}>
          <div className={`beds free`}>
            <p>Ahmed</p>
            <BiBed />
            <p>{'free'}</p>
          </div>
          <IoMdAddCircle id="add" onClick={() => onSubmitBed()} />
        </div>
      </div>
    </ViewRoomsSection>
  );
}
