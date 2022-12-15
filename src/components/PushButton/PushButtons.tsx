import React from 'react';
import PushButton from "./PushButton";
import {ValueButton} from "../../types";

interface Props {
  values: ValueButton[]
}

const PushButtons: React.FC<Props> = ({values}) => {
  return (
    <div className='d-flex flex-wrap'>
      {values.map((item) => (
        <PushButton
          key={Math.random() * 99999}
          value={item}
        />
      ))}
    </div>
  );
};

export default PushButtons;