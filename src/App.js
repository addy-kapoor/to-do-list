import { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoLists';
function App() {
  const [item, setItem] = useState("");
  const[allItems, setAllItems] = useState([]);
  const addItem = (event) => {
    setItem(event.target.value);
  }; 
  const finalAddItem = () => {
    setAllItems((preValue)  => {
      return [...preValue, item];
    });
    setItem('');
  };
  const deleteItems = (id) => {
    setAllItems((preValue) => {
        return preValue.filter((arrElm, index) => {
            return id !== index;
        });
    });
      
  }
  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <div className="add-item">
          <input
            type="text"
            id="taskInput"
            onChange={addItem}
            value={item}
            placeholder="Enter task"
          />
          <button onClick={finalAddItem}>Add</button>
        </div>
        <ul id="todoList">
        
          {allItems.map((listItem, index) => {
            return (
              <ToDoLists 
              key={index} 
              id={index}
              text={listItem}
              onSelect={deleteItems}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
