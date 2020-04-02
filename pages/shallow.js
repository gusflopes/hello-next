import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// import { Container } from './styles';

const Shallow = () => {
  const router = useRouter();
  const { counter } = router.query;

  useEffect(() => {
    setTimeout(() => router.push('/shallow?counter=10', { shallow: true }), 3000);
  }, []);

  useEffect(() => {
    // Counter changed.
    console.log('counter changed')

  }, [router.query.counter]);

  return (
    <div>
      <h1>Shallow Routing</h1>
      <h2>{counter}</h2>
    </div>
  );
}

export default Shallow;