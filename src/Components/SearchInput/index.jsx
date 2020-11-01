import React from "react";

import PropTypes from "prop-types";

import searchIcon from "../../images/loupe.svg";

import "./index.css";

const SearchInputComp = ({ inputValue, setInputValue }) => (
  <div className="search">
    <input
      className="search__input"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
    <img className="search__img" alt="loupe_img" src={searchIcon} />
  </div>
);

SearchInputComp.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default SearchInputComp;
