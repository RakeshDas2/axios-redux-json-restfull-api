import logo from './logo.svg';
import './App.css';
import ShowData from './components/ShowData';
import { useState } from 'react';
import AddData from './components/AddData';

function App() {
  const [showAddData, setShowAddData] = useState(false)
  return (
    <div className="App">
      {!showAddData && <button onClick={()=>{setShowAddData(true)}}>Add Data</button>}
      {showAddData && <AddData />}
      <ShowData />
    </div>
  );
}

export default App;
