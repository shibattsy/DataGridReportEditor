import React, { useState, useEffect } from 'react';

import data from '../data';

import ColumnsItem from './ColumnsItem';
import AddColumn from './AddColumn';

import './ColumsList.scss';

const ColumnsList = ({ columns, setColumns }) => {
  const [createMode, setCreateMode] = useState(false);

  const [useColumns, setUseColumns] = useState([]);
  useEffect(() => {
    setUseColumns(
      data.dataTypes.filter((el) => {
        return !columns.map((el) => el.dataField).includes(el);
      })
    );
  }, [columns]);

  const deleteColumn = (column) => {
    setColumns(columns.filter((el) => el.dataField !== column));
  };
  const editColumn = (column, caption) => {
    setColumns(
      columns.map((el) => {
        if (el.dataField === column) {
          return { ...el, caption };
        } else {
          return el;
        }
      })
    );
  };
  const addNewColumn = (dataField, caption, dataType, format, alignment) => {
    setCreateMode(false);
    if (!!caption.trim()) {
      setColumns([
        ...columns,
        {
          dataField,
          caption,
          dataType,
          format,
          alignment,
        },
      ]);
    } else {
      alert('Ошибка при добавлении колонки: Пустое поле caption!');
    }
  };
  return (
    <div>
      <div className="columns-list">
        {columns.map((el) => {
          return (
            <ColumnsItem
              key={el.dataField}
              item={el}
              deleteColumn={deleteColumn}
              editColumn={editColumn}
            />
          );
        })}
      </div>
      <div
        className="add-column"
        onClick={() => {
          if (useColumns.length > 0) {
            return setCreateMode(true);
          } else {
            return alert(
              'Невозможно добавить новую колонку. Закончились неиспользованные данные в файле data.js'
            );
          }
        }}
      >
        Добавить колонку
      </div>
      {createMode && (
        <AddColumn addNewColumn={addNewColumn} columns={useColumns} />
      )}
    </div>
  );
};

export default ColumnsList;
