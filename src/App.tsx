import React, { useState } from 'react';
import './App.css';
import CircleLoadingBar from './components/CircleLoadingBar';
import { Slider } from '@mui/material';

function App() {
  const [radius, setRadius] = useState(50);
  const [progress, setProgress] = useState(50);
  return (
    <div className="App">
      <CircleLoadingBar radius={radius} progress={progress} strokeWidth={5} />
      <div className="menuContainer">
        <div>
          <div style={{ marginRight: '16px', whiteSpace: 'nowrap' }}>radius :</div>
          <Slider
            size="small"
            min={50}
            max={100}
            onChange={(e: any) => setRadius(parseInt(e.target.value))}
            value={radius}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
        <div>
          <div style={{ marginRight: '16px', whiteSpace: 'nowrap' }}>progress :</div>
          <Slider
            size="small"
            max={100}
            onChange={(e: any) => setProgress(parseInt(e.target.value))}
            value={progress}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
