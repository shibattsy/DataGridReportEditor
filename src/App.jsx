import './App.scss';
import Table from './components/Table';
import ColumnsList from './components/ColumnsList';
import config from './report-config';
import { useState } from 'react';

function App() {
  const [columns, setColumns] = useState(config.columns.items);
  return (
    <div className="app">
      <div className="wrap">
        <div>Окно предварительного просмотра отчёта</div>
        {columns.length > 0 && <Table columns={columns} />}
      </div>
      <div className="wrap">
        <div>Список колонок</div>
        <ColumnsList columns={columns} setColumns={setColumns} />
      </div>
    </div>
  );
}

export default App;
