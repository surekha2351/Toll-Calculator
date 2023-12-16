import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateToll, decodePolyline } from '../redux/actions';
import '../components/TollCalculator.css';

const TollCalculator = () => {
  const dispatch = useDispatch();
  const route = useSelector((state) => state.route);
  const decodingLoading = useSelector((state) => state.decodingLoading);
  const decodingError = useSelector((state) => state.decodingError);
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  const handleCalculateToll = () => {
    dispatch(calculateToll(startLocation, endLocation));
  };
  const handleDecodePolyline = () => {
    dispatch(decodePolyline(route.polyline));
  };

  return (
    <div>
      {/* ... input fields and calculate button ... */}
      <input

        type="text"
        placeholder="Start Location"
        className='start-button'
        value={startLocation}
        onChange={(e) => setStartLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="End Location"
        className='end-button'
        value={endLocation}
        onChange={(e) => setEndLocation(e.target.value)}
      />
      <br/>
      <button onClick={handleCalculateToll} className='button'>Calculate Toll</button>
      {route && (
        <div>
          <p>Calculated Route:</p>
          <p>{route.polyline}</p>
          <button onClick={handleDecodePolyline} disabled={decodingLoading}>
            {decodingLoading ? 'Decoding...' : 'Decode Polyline'}
          </button>
          {decodingError && <p style={{ color: 'red' }}>{decodingError}</p>}
        </div>
      )}
    </div>
  );
};

export default TollCalculator;