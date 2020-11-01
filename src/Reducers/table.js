const initialState = {
  data: [],
  order: "asc",
  column: "name",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_SORTING_COLUMN":
      return {
        ...state,
        column: action.payload,
        order:
          state.column === action.payload
            ? state.order === "asc"
              ? "desc"
              : "asc"
            : "asc",
      };
    default:
      return state;
  }
};
