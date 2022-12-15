import React from 'react';
import PushButtons from "./components/PushButton/PushButtons";
import {ValueButton} from "./types";

function App() {
  const buttonsValue: ValueButton[] = [
    {value: '7'},
    {value: '8'},
    {value: '9'},
    {value: '4'},
    {value: '5'},
    {value: '6'},
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '<'},
    {value: '0'},
    {value: 'E'},
  ];

  return (
    <div className='container'>
      <div className='mt-5' style={{width: '300px', marginLeft: '400px'}}>
        <input type="text" style={{width: '300px', height: '80px'}}/>
        <PushButtons values={buttonsValue}/>
      </div>
    </div>
  );
}

export default App;
