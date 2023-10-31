import React from 'react';
import MySvgComponent from '../SVG/SecondSVG';

export const LeftContainer: React.FC = () => {
  return (
    <div className='sidebar'>
      <div className='main-actions'>
        <div className='text-wrapper'>to-dos</div>
        <div className='div'>notes</div>
        <div className='div'>user</div>
        <div className='text-wrapper-2'>cards</div>
      </div>
      <div className='illustra'>
        <MySvgComponent />
      </div>
      <div className='text-wrapper-3'>logout</div>
    </div>
  );
};
