import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <h1>Home</h1>
        <ul>
          <li>
            <Link href="/posts/first-post">
              <a>First Post</a>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
