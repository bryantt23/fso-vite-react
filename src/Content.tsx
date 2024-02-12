import React from 'react';
import { Course } from './types'; // Import the Course type

interface ContentProps {
  courseParts: Course[];
}

const Content: React.FC<ContentProps> = ({ courseParts }) => {
  return (
    <div>
      {courseParts.map(coursePart => (
        <p>
          {coursePart.name} {coursePart.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
