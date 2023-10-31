import React from 'react';
import Todos from '../components/Todos/Todos';
import { ThirdSVG } from '../SVG/ThirdSVG';

export const RightContainer: React.FC = () => {
  return (
    <div className='main-content'>
      <div className='rectangle'>
        <Todos />{' '}
        <div className='img'>
          <ThirdSVG />
        </div>
      </div>
    </div>
  );
};
