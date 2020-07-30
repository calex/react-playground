import React from 'react';

import './App.css';
import RouletteGun from './state-drills/RouletteGun.js';

function App() {
  return (
    <div className="App">
      <RouletteGun bulletInChamber={5} />
    </div>
  );
}

export default App;
