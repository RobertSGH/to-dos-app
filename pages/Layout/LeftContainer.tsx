import React, { FC, useCallback } from 'react';
import MySvgComponent from '../SVG/SecondSVG';

interface Props {
  setActiveComponent: (component: string) => void;
}

export const LeftContainer: React.FC<Props> = ({ setActiveComponent }) => {
  const handleComponentChange = useCallback(
    (component: string) => {
      setActiveComponent(component);
    },
    [setActiveComponent]
  );

  return (
    <div className='sidebar'>
      <div className='main-actions'>
        <button onClick={() => handleComponentChange('todos')}>To-dos</button>
        <button onClick={() => handleComponentChange('notes')}>Notes</button>
        <button onClick={() => handleComponentChange('cards')}>Cards</button>
        <button onClick={() => handleComponentChange('user')}>User</button>
      </div>
      <div className='illustra'>
        <MySvgComponent />
      </div>
      <button>Logout</button>
    </div>
  );
};
