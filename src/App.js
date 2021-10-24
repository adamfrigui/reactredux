import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

import './App.css';


function App() {
  return (
    <div className="App">
      <h2>my todoList</h2>
      <AddTask/>
      <ListTask/>
  
    </div>
  );
}

export default App;
