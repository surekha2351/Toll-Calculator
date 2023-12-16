const initialState = {
  route: null,
  decodedPolyline: null,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CALCULATE_TOLL':
      return {
        ...state,
        route: action.payload,
      };
    case 'DECODE_POLYLINE':
      return {
        ...state,
        decodedPolyline: action.payload,
      };
    default:
      return state;
  }
  
};

export default reducer;
