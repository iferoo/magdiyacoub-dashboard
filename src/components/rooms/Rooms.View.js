import React from 'react';
import { useOutletContext } from 'react-router-dom';

import { ViewRoomsSection } from '../../styles/Rooms.Styled';

import RoomsAdd from './Rooms.Add';
import RoomList from './Rooms.List';


export default function ViewRooms() {
  const [rooms, dispatch] = useOutletContext();

  const roomList = rooms => {
    return rooms.map(room => (
      <RoomList key={room.id} room={room} dispatch={dispatch} />
    ));
  };

  return (
    <ViewRoomsSection>
      {roomList(rooms)}
      <RoomsAdd dispatch={dispatch}/>
    </ViewRoomsSection>
  );
}
