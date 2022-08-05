import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { PageSection } from '../../styles/Global';

import { getRooms } from '../../store/roomSlice';
import Loading from '../Loading';

export default function RoomsPage() {
  const dispatch = useDispatch();

  const { isLoading, rooms } = useSelector(state => state.rooms);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  return (
    <PageSection>
      <div className="container">
        <div className="top">
          <h2>Rooms</h2>
        </div>

        <div className="down">
          {isLoading ? <Loading /> : <Outlet context={[rooms, dispatch]} />}
        </div>
      </div>
    </PageSection>
  );
}
