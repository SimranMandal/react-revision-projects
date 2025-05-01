import React from 'react'
import Accordions from './Accordions'
import { accordionData } from './utils/content';


const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordions title={title} content={content} />
        ))}
      </div>
    </div>
  );
};
export default App

