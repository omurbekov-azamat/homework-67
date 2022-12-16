import React from 'react';
import {checkCode, increaseBy, clearCode} from "./PushSlice";
import {useDispatch} from "react-redux";
import PushButton from "./PushButton";
import OnePushButton from "./OnePushButton";
import {GotValue} from "../../types";

interface Props {
  values: GotValue[];
}

const PushButtons: React.FC<Props> = ({values}) => {
  const dispatch = useDispatch();
  return (
    <div className='d-flex flex-wrap'>
      {values.map((value) => (
        <PushButton
          key={Math.random() * 99999}
          value={value}
        />
      ))}
      <OnePushButton value='<' onClick={() => dispatch(clearCode())}/>
      <OnePushButton value='0' onClick={() => dispatch(increaseBy('0'))}/>
      <OnePushButton value='E' onClick={() => dispatch(checkCode())}/>
    </div>
  );
};

export default PushButtons;