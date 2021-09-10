import axios from "axios";

export const inc = () => {
  return {
    type: "INC",
  };
};
export const dec = () => {
  return {
    type: "DEC",
  };
};

export const GetApi = () => {
  return async (dispatch) => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_DATA", payload: res });
      });
  };
};
