import React from 'react';
import { CoursePart } from './types'; // Import the CoursePart type

interface PartProps {
  coursePart: CoursePart;
}

const Part: React.FC<PartProps> = ({ coursePart }) => {
  switch (coursePart.kind) {
    case 'basic':
      return <div>description: {coursePart.description}</div>;
    case 'group':
      return <div>groupProjectCount: {coursePart.groupProjectCount}</div>;
    case 'background':
      return (
        <div>
          description: {coursePart.description}, backgroundMaterial:{' '}
          {coursePart.backgroundMaterial}
        </div>
      );
    default:
      return <div>something went wrong</div>;
  }
};

export default Part;
