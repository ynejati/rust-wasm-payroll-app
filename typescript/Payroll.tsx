import * as React from 'react';
// import * as wasm from '../pkg/payroll';

import { Login } from './Login';
import { Dashboard } from './Dashboard';

import { KeyboardDownArrow } from './index';

export enum Pages {
  LOGIN,
  DASHBOARD,
  ACCOUNT_SETTINGS
}

export const Payroll = (props: any) => {
  const {
    LOGIN,
    DASHBOARD,
    ACCOUNT_SETTINGS
  } = Pages;
  const [currentPage, setCurrentPage] = React.useState<Pages>(LOGIN)

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100% - 100px)',
    width: '100%',
    marginTop: 70
  };

  const handleSignInClick = () => {
    setCurrentPage(DASHBOARD);
  };

  let content;

  switch (currentPage) {
    case LOGIN:
      content = <Login onSignInClick={handleSignInClick} />;
    // break;
    case DASHBOARD:
      content = <Dashboard {...mockDashboardProps} />;
      break;
    case ACCOUNT_SETTINGS:
  }

  return (
    <div style={{ position: 'relative' }}>
      <div className='headerNavBar'>
        <div className='headerAppName'>ABC Payroll Services</div>
        <div style={{ display: 'inline-flex', cursor: 'pointer' }}>
          <div>Yousuf Nejati</div>
          <KeyboardDownArrow />
        </div>
      </div>
      <div style={containerStyle}>
        {content}
      </div>
    </div>
  );
}

const mockDashboardProps = {
  firstName: 'Yousuf',
  lastName: 'Nejati',
  employeeId: 710,
  sick: 80,
  vacation: 48,
  juryDuty: 0,
  voting: 0
}