import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'

// import { Container } from './styles';

const Post = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('')
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    setData([pid])
  }, [pid])

  async function handleClick() {
    setData(data => [...data, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Post: {pid} </h1>

      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleClick}>Adicionar</button>
      <p>Get the Pid params from routes.</p>
      <ul>
        {data.map(d => (
          <li key={`element-${d}`}>{d} <button onClick={() => alert(`Element Key: ${d}`)} > (-) </button></li>
        ))}
      </ul>
      <button onClick={() => console.log(data)}>Log</button>
    </div>
  );
}

export default Post;