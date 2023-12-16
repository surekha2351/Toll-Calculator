// App.js
import React from 'react';
import { useSelector } from 'react-redux';
import TollCalculator from './components/TollCalculator';
import TollMap from './components/Map';


function App() {

  const decodedPolyline = useSelector((state) => state.decodedPolyline);

  console.log('Decoded Polyline:', decodedPolyline);

  return (
    <div>
      <center>
      <h1>Toll Calculator App</h1>
      <TollCalculator />
      {decodedPolyline && <TollMap />}
      </center>
    </div>
  );
}

export default App;
