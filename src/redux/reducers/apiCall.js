const intstate = {
  data: [],
};
const apiCall = (state = intstate, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default apiCall;
