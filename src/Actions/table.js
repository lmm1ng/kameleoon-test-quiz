import axios from "axios";

const setData = (array) => ({
  type: "SET_DATA",
  payload: array,
});

export const setSortingColumn = (string) => ({
  type: "SET_SORTING_COLUMN",
  payload: string,
});

export const setDataAsync = () => {
  return async (dispatch) => {
    await axios
      .get(
        "https://raw.githubusercontent.com/lmm1ng/kameleoon-test-quiz/master/db.json"
      )
      .then((response) => dispatch(setData(response.data)))
      .catch((err) => console.log(err));
  };
};
