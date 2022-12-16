import React from 'react';

interface Props {
  value: string;
  onClick: () => void;
}

const OnePushButton: React.FC<Props> = ({value, onClick}) => {
  return (
    <div
      className='border border-light text-center fs-2 pt-4'
      style={{width: '100px', height: '100px'}}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default OnePushButton;