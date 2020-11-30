export default function TodoList(props) {
  const { items, onRemove } = props;
  return (
    <div className='list'>
      <ul>
        {items.map((t, index) => (
          <li className={index % 2 === 0 ? 'odd' : 'even'} key={index}>
            {index + 1}
            {'. '}
            {t}
            <button onClick={onRemove.bind(this, t)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
