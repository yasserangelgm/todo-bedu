function TodoForm(props) {
  const { onAdd, newItem, onChangeInput } = props;

  return (
    <div className='todo-form'>
      <h2>ToDo List</h2>
      <input type='text' value={newItem} onChange={onChangeInput} />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
export default TodoForm;
