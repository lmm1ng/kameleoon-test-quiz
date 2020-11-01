import { createSelector } from "reselect";
import * as R from "ramda";

const getData = (state) => state.table.data || [];
const getOrder = (state) => state.table.order;
const getColumn = (state) => state.table.column;
const getInputValue = (state) => state.searchInput.inputValue;

export const getSortedData = createSelector(
  [getData, getOrder, getColumn, getInputValue],
  (data, order, column, inputValue) => {
    let sortedData =
      order === "asc"
        ? R.sort(
            R.ascend(R.compose(R.toLower, R.toString, R.prop(column))),
            data
          )
        : R.sort(
            R.descend(R.compose(R.toLower, R.toString, R.prop(column))),
            data
          );

    return sortedData.filter((row) => {
      let isValid = false;
      if (inputValue === "") return true;
      if (
        row.name.toString().toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      ) {
        isValid = true;
      }

      return isValid;
    });
  }
);
