import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sound from './components/sounds';
import Video from './components/video';

function App() {
  return (
    <div className="App">
      <Sound/>
      <Video/>
    </div>
  );
}

export default App;
