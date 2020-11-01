import React, { useEffect } from "react";

import PropTypes from "prop-types";

import Loader from "../Loader";

import disabledIcon from "../../images/switch-off.svg";
import enabledIcon from "../../images/switch-on.svg";
import lockIcon from "../../images/padlock.svg";
import sortAscIcon from "../../images/sort-asc.svg";
import sortDescIcon from "../../images/sort-desc.svg";

import "./index.css";

const TableComp = ({
  currentData,
  isRequestNeeded,
  order,
  sortingColumn,
  setData,
  setSortingColumn,
}) => {
  useEffect(() => {
    if (isRequestNeeded) setData();
  });

  let headers = [];

  if (currentData.length) {
    headers = Object.keys(currentData[0]).filter((key) => key !== "id");
  }

  return (
    <div id="main-content">
      {!isRequestNeeded ? (
        <table className="table">
          <thead className="table__header">
            <tr
              className="table__header__row table__row"
              onClick={(event) =>
                setSortingColumn(event.target.innerText.toLowerCase())
              }
            >
              {headers.map((columnName) => (
                <th
                  key={`header_${columnName}`}
                  className="table__header__row__cell table__row__cell"
                >
                  <span>{columnName}</span>
                  {sortingColumn === columnName ? (
                    <img
                      src={order === "asc" ? sortAscIcon : sortDescIcon}
                      alt={order}
                      className="table__header__row__cell__icon"
                    />
                  ) : (
                    ""
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table__body">
            {currentData.map((row, index) => (
              <tr key={`body_row${index}`} className="table__row">
                {headers.map((header) => (
                  <td
                    key={`body_row_cell${index}_${header}`}
                    className={`table__row__cell ${
                      header === "type" ? "table__row__cell__type" : ""
                    }`}
                  >
                    {header === "status" ? (
                      <img
                        key={`status${index}`}
                        src={
                          row[header] === "enable"
                            ? enabledIcon
                            : row[header] === "disable"
                            ? disabledIcon
                            : row[header] === "blocked"
                            ? lockIcon
                            : null
                        }
                        alt={row[header]}
                      />
                    ) : (
                      row[header]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loader />
      )}
    </div>
  );
};

TableComp.propTypes = {
  currentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  isRequestNeeded: PropTypes.bool.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  sortingColumn: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  setSortingColumn: PropTypes.func.isRequired,
};

export default TableComp;
