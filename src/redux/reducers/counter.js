const counter = (state = 1, action) => {
  switch (action.type) {
    case "INC": {
      return state + 1;
    }
    case "DEC": {
      if (state > 1) {
        return state - 1;
      } else {
        alert("Limit exceed");
      }
      break;
    }

    default:
      return state;
  }
};

export default counter;
