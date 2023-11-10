import { useState } from 'react';
import { LeftContainer } from './Layout/LeftContainer';
import { RightContainer } from './Layout/RightContainer';

export const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState<string>('todos');

  return (
    <div className='desktop'>
      <LeftContainer setActiveComponent={setActiveComponent} />
      <RightContainer activeComponent={activeComponent} />
    </div>
  );
};
