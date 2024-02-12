import React from 'react';
import { CoursePart } from './types'; // Import the CoursePart type

interface PartProps {
  coursePart: CoursePart;
}

const Part: React.FC<PartProps> = ({ coursePart }) => {
  switch (coursePart.kind) {
    case 'basic':
      return (
        <div>
          <em>{coursePart.description}</em>
        </div>
      );
    case 'group':
      return <div>groupProjectCount: {coursePart.groupProjectCount}</div>;
    case 'background':
      return (
        <div>
          <em>{coursePart.description}</em>, backgroundMaterial:{' '}
          {coursePart.backgroundMaterial}
        </div>
      );
    case 'special':
      return (
        <div>
          <em>{coursePart.description}</em>, requirements:{' '}
          {coursePart.requirements.join(',')}
        </div>
      );
    default:
      return <div>something went wrong</div>;
  }
};

export default Part;
