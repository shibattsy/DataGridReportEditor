import DataGrid, { Column, ColumnFixing } from 'devextreme-react/data-grid';

import data from '../data';

import './Table.scss';

function Table({ columns }) {
  return (
    <DataGrid
      id="gridContainer"
      dataSource={data.items}
      keyExpr="ID"
      allowColumnReordering={true}
      allowColumnResizing={true}
      columnAutoWidth={true}
      showBorders={true}
    >
      <ColumnFixing enabled={true} />
      {columns.map((el, index) => (
        <Column
          key={el.dataField}
          dataField={el.dataField}
          caption={el.caption}
          dataType={el.dataType}
          fixed={index === 0}
          format={el.format}
          alignment={el.alignment}
        />
      ))}
    </DataGrid>
  );
}

export default Table;
