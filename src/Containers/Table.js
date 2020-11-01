import { connect } from "react-redux";
import TableComp from "../Components/Table";
import { setDataAsync, setSortingColumn } from "../Actions/table";
import { getSortedData } from "../Selectors/getSortedData";

export default connect(
  (state) => ({
    currentData: getSortedData(state),
    isRequestNeeded: !state.table.data.length,
    order: state.table.order,
    sortingColumn: state.table.column,
  }),
  {
    setData: setDataAsync,
    setSortingColumn,
  }
)(TableComp);
