import React from 'react';
import Link from 'next/link'

// import { Container } from './styles';

const Home = () => {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <Link href="/about"><a title="Sobre">Sobre</a></Link>
    </div>
  );
}

export default Home;