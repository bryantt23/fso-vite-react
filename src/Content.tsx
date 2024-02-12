import React from 'react';
import { CoursePart } from './types'; // Import the Course type
import Part from './Part';

interface ContentProps {
  courseParts: CoursePart[];
}
const Content: React.FC<ContentProps> = ({ courseParts }) => {
  console.log('🚀 ~ courseParts:', courseParts);
  return (
    <div>
      {courseParts.map(coursePart => (
        <div style={{ border: '1px solid black' }}>
          <p>
            <b>
              {coursePart.name} {coursePart.exerciseCount}
            </b>
          </p>
          <Part coursePart={coursePart} />
        </div>
      ))}
    </div>
  );
};

export default Content;
