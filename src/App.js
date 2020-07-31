import React from 'react';
import './App.css';
import Accordion from './state-drills/Accordion.js';

const sections = [
  {
      title: 'Section 1',
      content: 'Section 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
      title: 'Section 2',
      content: 'Section 2 Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
      title: 'Section 3',
      content: 'Section 3 Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]


function App() {
  return (
    <div className="App">
      <Accordion sections={sections} />
    </div>
  );
}

export default App;
