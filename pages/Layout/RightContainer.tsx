import React from 'react';
import Todos from '../components/Todos/Todos';
import { ThirdSVG } from '../SVG/ThirdSVG';
import { COMPONENTS_MAP } from '../components/ComponentsMapping';

interface Props {
  activeComponent: string;
}

export const RightContainer: React.FC<Props> = ({ activeComponent }) => {
  const ComponentToRender = COMPONENTS_MAP[activeComponent] || null;

  return (
    <div className='main-content'>
      <div className='rectangle'>
        {ComponentToRender ? <ComponentToRender /> : null}
        <div className='img'>
          <ThirdSVG />
        </div>
      </div>
    </div>
  );
};
