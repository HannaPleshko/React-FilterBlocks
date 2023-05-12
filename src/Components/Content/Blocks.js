import Item from './Item';

function Blocks() {
  const emails = ['test@gmail.com', 'qwer1@gmail.com', 'hanna@gmail.com', 'test_1@gmail.com'];

  return (
    <div>
      {emails.map(el => (
        <Item title={el} />
      ))}
    </div>
  );
}

export default Blocks;
