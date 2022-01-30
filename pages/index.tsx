import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import { getSlug, getPosts } from '../lib/posts';

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const Home = ({ posts }: { posts: any[] }) => {
  console.log('[HomePage] render:', posts);

  return (
    <>
      <main>
        <h1>Home</h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Home;
