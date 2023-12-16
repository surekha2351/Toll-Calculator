import axios from 'axios';
import { decode } from '@googlemaps/polyline-codec';

export const calculateToll = (startLocation, endLocation) => async (dispatch) => {
  try {
    const response = await axios.post(
      'YOUR_ACTUAL_TOLL_GURU_API_ENDPOINT',
      { startLocation, endLocation },
      { headers: { 'Api-Key': 'fMJrBhbfh8Mn94Fp2jMFj84fMLt9P3B8' } }
    );

    dispatch({
      type: 'CALCULATE_TOLL',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error calculating toll:', error);
  }
};

export const decodePolyline = (polyline) => (dispatch) => {
  try {
    const decodedPolyline = decode(polyline); // Use the provided polyline parameter
    dispatch({
      type: 'DECODE_POLYLINE',
      payload: decodedPolyline,
    });
  } catch (error) {
    console.error('Error decoding polyline:', error);
  }
};
