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
    <div className='dashboardContentContainer'>
      <div className='overviewCard'>
        <div className='timeOff'>My Time Off</div>
        <div className='asOfToday'>As of today</div>
        <a href="" className='requestOff'>REQUEST TIME OFF</a>
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
        <div className='balanceRequestAnnotation'>* Balance/Request Amount: D (Days); H (Hours)</div>
        <div className='balanceIncludesAnnotation'>* The balances include future transactions.</div>
      </div>
      <div className='myTimeOverviewCard'>
        <div className='title'>My Time</div>
        <div className='today'>{`${today.toDateString()} ${today.getHours()}:${today.getMinutes()}`}</div>
        <button>CLOCK IN</button>
        <button>CLOCK OUT</button>
        <button>MY TIMECARD</button>
        <button>SUPPLEMENTAL PAY CODE</button>
      </div>
      <div className='quickLinks'>
        <div>Quick Links</div>
      </div>
      <div className='news'>
        <div>ABC Payroll News</div>
      </div>
    </div>
  );
}

function padNumber(num: number): string {
  return (Math.round(num * 100) / 100).toFixed(2);
}