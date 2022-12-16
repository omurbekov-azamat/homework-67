import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "./app/store";
import {VALUES} from "./constants";
import PushButtons from "./components/PushButton/PushButtons";

function App() {
  const value = useSelector((state: RootState) => state.password);

  return (
    <div className='container'>
      <div className='mt-5' style={{width: '300px', marginLeft: '400px'}}>
        <div
          className='border border-dark pt-1'
          style={{height: '50px', background: value.check}}
        >
          {value.value.replaceAll(/./g,'*')}
        </div>
        <PushButtons values={VALUES}/>
      </div>
    </div>
  );
}

export default App;
