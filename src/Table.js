import React from "react";
import numeral from "numeral";
import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <div key={country} className="tr">
          <div className="td">{country}</div>
          <div className="td">
            <strong>{numeral(cases).format("0,0")}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
