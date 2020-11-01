import { connect } from "react-redux";
import SearchInputComp from "../Components/SearchInput";
import { setInputValue } from "../Actions/searchInput";

export default connect(
  (state) => ({ inputValue: state.searchInput.inputValue }),
  { setInputValue }
)(SearchInputComp);
