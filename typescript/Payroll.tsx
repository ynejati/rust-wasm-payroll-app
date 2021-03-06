import * as React from 'react';
import { Login } from './Login';
import { Dashboard } from './Dashboard';

import { KeyboardDownArrow } from './index';

export enum Pages {
  LOGIN,
  DASHBOARD,
  ACCOUNT_SETTINGS
}

export const Payroll = (props: { wasm: any }) => {
  const {
    LOGIN,
    DASHBOARD,
    ACCOUNT_SETTINGS
  } = Pages;
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<Pages>(LOGIN);

  const handleSignInClick = (username: string, password: string) => {
    if (props.wasm.authenticate(username, password)) {
      setAuthenticated(true);
      setCurrentPage(DASHBOARD);
    }
  };

  let content;

  switch (currentPage) {
    case LOGIN:
      content = <Login onSignInClick={handleSignInClick} />;
      break;
    case DASHBOARD:
      content = <Dashboard authenticated={authenticated} {...mockDashboardProps} />;
      break;
    case ACCOUNT_SETTINGS:
  }

  return (
    <div style={{ position: 'relative' }}>
      <div className='headerNavBar'>
        <div className='headerAppName'>ABC Payroll Services</div>
        <div className='headerAccount'>
          <div>Yousuf Nejati</div>
          <KeyboardDownArrow />
        </div>
      </div>
      <div className='contentContainer'>
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