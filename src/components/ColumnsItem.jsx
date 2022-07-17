import React, { useState, useRef } from 'react';
import './ColumnsItem.scss';
const ColumnsItem = ({ item, deleteColumn, editColumn }) => {
  const [editMode, setEditMode] = useState(false);
  const newCaption = useRef(null);

  const onButtonClick = () => {
    setEditMode(false);
    if (!!newCaption.current.value.trim()) {
      editColumn(item.dataField, newCaption.current.value);
    }
  };
  return (
    <div key={item.caption}>
      <div className="columns-item__caption">{item.caption}</div>
      <img
        className="columns-item__icon"
        src="./assets/DeleteBin.svg"
        alt="Delete"
        onClick={() => deleteColumn(item.dataField)}
      />
      <img
        className="columns-item__icon"
        src="./assets/Edit.svg"
        alt="Delete"
        onClick={() => setEditMode(true)}
      />
      {editMode && (
        <div>
          <input ref={newCaption} type="text" />
          <button onClick={onButtonClick}>OK</button>
        </div>
      )}
    </div>
  );
};

export default ColumnsItem;
