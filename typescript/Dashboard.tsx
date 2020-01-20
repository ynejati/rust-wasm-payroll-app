import * as React from 'react';

export const Dashboard = (props: any) => {
  const {
    firstName,
    lastName,
    employeeId,
    sick,
    vacation,
    juryDuty,
    voting
  } = props;

  const today = new Date();

  return (
    <div className='dashboard'>
      <div>
        <div style={{ fontSize: 20, paddingBottom: 10, color: '#b22641', marginBottom: 50, alignSelf: 'center', borderBottom: '1px solid #dadada', width: '100%' }}>My Time Off</div>
        <div style={{ fontSize: 14 }}>As of today</div>
        <a href="" style={{ margin: '20 0' }}>REQUEST TIME OFF</a>
        <div className='overviewTable'>
          <div className='overviewTableRow'>
            <div className="header">TIME OFF POLICY</div>
            <div className="header">BALANCE</div>
            <div className="header">REQUESTS PENDING</div>
            <div className="header">REQUESTS SCHEDULED</div>
          </div>
          <div className='overviewTableRow'>
            <div>Sick:</div>
            <div className='number'>{`${padNumber(sick)} H`}</div>
            <div className='number'>{`${padNumber(0)} H`}</div>
            <div className='number'>{`${padNumber(0)} H`}</div>
          </div>
          <div className='overviewTableRow'>
            <div>Vacation:</div>
            <div className='number'>{`${padNumber(vacation)} H`}</div>
            <div className='number'>{`${padNumber(0)} H`}</div>
            <div className='number'>{`${padNumber(0)} H`}</div>
          </div>
          <div className='overviewTableRow'>
            <div>Jury Duty:</div>
            <div className='number'>{`${padNumber(juryDuty)} H`}</div>
            <div className='number'>{`${padNumber(0)} H`}</div>
            <div className='number'>{`${padNumber(0)} H`}</div>
          </div>
          <div className='overviewTableRow'>
            <div>Voting:</div>
            <div className='number'>{`${padNumber(voting)} H`}</div>
            <div className='number'>{`${padNumber(0)} H`}</div>
            <div className='number'>{`${padNumber(0)} H`}</div>
          </div>
        </div>
        <div style={{ marginTop: 20, fontSize: 12 }}>* Balance/Request Amount: D (Days); H (Hours)</div>
        <div style={{ fontSize: 12 }}>* The balances include future transactions.</div>
      </div>
      <div className='myTime' style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 20, paddingBottom: 10, color: '#b22641', marginBottom: 10, alignSelf: 'center', borderBottom: '1px solid #dadada', width: '100%' }}>My Time</div>
        <div style={{ marginBottom: 30 }}>{`${today.toDateString()} ${today.getHours()}:${today.getMinutes()}`}</div>
        <button>CLOCK IN</button>
        <button>CLOCK OUT</button>
        <button>MY TIMECARD</button>
        <button>SUPPLEMENTAL PAY CODE</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>Quick Links</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>ABC Payroll News</div>
      </div>
    </div>
  );
}

function padNumber(num: number): string {
  return (Math.round(num * 100) / 100).toFixed(2);
}