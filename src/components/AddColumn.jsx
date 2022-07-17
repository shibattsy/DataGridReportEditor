import React, { useRef } from 'react';

import './AddColumn.scss';

const AddColumn = ({ columns, addNewColumn }) => {
  const dataField = useRef(null);
  const caption = useRef(null);
  const dataType = useRef(null);
  const format = useRef(null);
  const alignment = useRef(null);

  return (
    <div className="add-column">
      <div className="add-column__wrap">
        <label htmlFor="dataField">Data Field</label>
        <select
          name="dataField"
          id="dataField"
          ref={dataField}
          selected="selected"
        >
          {columns.map((el) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </div>
      <div className="add-column__wrap">
        <label htmlFor="caption">Caption</label>
        <input ref={caption} type="text" id="caption" />
      </div>
      <div className="add-column__wrap">
        <label htmlFor="dataType">Data Type</label>
        <select
          name="dataType"
          id="dataType"
          ref={dataType}
          selected="selected"
        >
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
        </select>
      </div>
      <div className="add-column__wrap">
        <label htmlFor="format">Format</label>
        <select name="format" id="format" ref={format} selected="selected">
          <option value="">Default</option>
          <option value="percent">Percent</option>
          <option value="currency">Currency</option>
        </select>
      </div>
      <div className="add-column__wrap">
        <label htmlFor="format">Alignment</label>
        <select
          name="alignment"
          id="alignment"
          ref={alignment}
          selected="selected"
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="center">Center</option>
        </select>
      </div>
      <button
        className="add-column__btn"
        onClick={() => {
          addNewColumn(
            dataField.current.value,
            caption.current.value,
            dataType.current.value,
            format.current.value,
            alignment.current.value
          );
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddColumn;
