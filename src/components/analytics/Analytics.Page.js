import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { PageSection } from '../../styles/Analytics.Styled';


export default function AnalyticsPage() {
  const { pathname } = useLocation();

  const [activeLink, setActiveLink] = useState(1);

  useEffect(() => {
    const handleActiveLink = () => {
      pathname === '/analytics/today'
        ? setActiveLink(1)
        : pathname === '/analytics/week'
        ? setActiveLink(2)
        : pathname === '/analytics/month'
        ? setActiveLink(3)
        : setActiveLink(4);
    };

    handleActiveLink();
  }, [pathname]);

  return (
    <PageSection>
      <div className="container">
        <div className="top">
          <h2>Analytics</h2>
        </div>
        <div className="date">
          <Link
            to="today"
            className={`today ${activeLink === 1 && 'active'}`}
            onClick={() => setActiveLink(1)}
          >
            Today
          </Link>
          <Link
            to="week"
            className={`week ${activeLink === 2 && 'active'}`}
            onClick={() => setActiveLink(2)}
          >
            This week
          </Link>
          <Link
            to="month"
            className={`month ${activeLink === 3 && 'active'}`}
            onClick={() => setActiveLink(3)}
          >
            This month
          </Link>
          <Link
            to="year"
            className={`year ${activeLink === 4 && 'active'}`}
            onClick={() => setActiveLink(4)}
          >
            This year
          </Link>
        </div>
        <div className="down">
          <Outlet />
        </div>
      </div>
    </PageSection>
  );
}

