import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../css/main.css';
import { Payroll } from './Payroll';

load();

function start(mymod: typeof import('../pkg/payroll')) {
  console.log("Loaded wasm module.");
  // Wasm module must be loaded async. 
  // This is anything but ideal but works for
  // our simple example.  Consider instead passing
  // down as store prop instead so that the UI load is 
  // not dependent on the module load time...
  ReactDOM.render(<Payroll wasm={mymod} />, document.getElementById('mount')); 
}

async function load() {
  start(await import('../pkg/payroll'));
}

export const KeyboardDownArrow = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
);