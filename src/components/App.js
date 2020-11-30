import TodoForm from './Form';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem && !toDoItems.includes(newItem)) {
      const newToDoItems = [...toDoItems, newItem];
      setToDoItems(newToDoItems);
    }
  };

  const handleInput = (e) => {
    setNewItem(e.target.value);
  };

  const handleRemove = (toDo) => {
    setToDoItems(toDoItems.filter((item) => item !== toDo));
  };

  return (
    <div className='App'>
      <TodoForm
        inputValue={newItem}
        onAdd={handleAdd}
        onChangeInput={handleInput}
      />

      <TodoList items={toDoItems} onRemove={handleRemove} />
    </div>
  );
}

export default App;
