import React from 'react';
import { useRouter } from 'next/router'

// import { Container } from './styles';

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <h1>Post: {pid} </h1>
      <p>Get the Pid params from routes.</p>
    </div>
  );
}

export default Post;