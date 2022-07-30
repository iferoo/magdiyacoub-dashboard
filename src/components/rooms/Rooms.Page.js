import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { PageSection } from '../../styles/styles';

import { getRooms } from '../../store/roomSlice';

export default function RoomsPage() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(1);
  const dispatch = useDispatch();

  const { isLoading, rooms } = useSelector(state => state.rooms);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  useEffect(() => {
    const handleActiveLink = () => {
      pathname === '/rooms/update'
        ? setActiveLink(2)
        : pathname === '/rooms/add'
        ? setActiveLink(3)
        : setActiveLink(1);
    };
    handleActiveLink();
  }, [pathname]);

  // useEffect(() => {
  //   console.log(rooms);
  // }, [rooms]);
  return (
    <PageSection>
      <div className="container">
        <div className="top">
          <h2>Rooms</h2>
          <div>
            <Link
              to=""
              className={`${activeLink === 1 && 'active'}`}
              onClick={() => setActiveLink(1)}
            >
              View
            </Link>
            <Link
              to="update"
              className={`${activeLink === 2 && 'active'}`}
              onClick={() => setActiveLink(2)}
            >
              Update
            </Link>
            <Link
              to="add"
              className={`${activeLink === 3 && 'active'}`}
              onClick={() => setActiveLink(3)}
            >
              Add
            </Link>
          </div>
        </div>

        <div className="down">
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <Outlet rooms={rooms} dispatch={dispatch} />
          )}
        </div>
      </div>
    </PageSection>
  );
}
