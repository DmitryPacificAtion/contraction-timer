import './Table.scss';

function Table({ list }) {
  return (
    <div className='table-wrapper'>
      <table className='table-screen'>
        {list.map(({ id, type, name, time }) => (
          <tr key={id}>
            <td class={type}>{name}</td>
            <td class={type}>{time}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export { Table };
