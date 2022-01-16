import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { readFile } from 'fs/promises';

type post = {
  title: string;
  body: string;
};

export const getStaticProps: GetStaticProps = async () => {
  console.log('[FirstPostPage] getStaticProps()');
  const data = await readFile('content/posts/first-post.json', 'utf8');
  const post = JSON.parse(data);
  console.log(post);

  return {
    props: {
      post: {
        post,
      },
    },
  };
};

const FirstPostPage: NextPage<{ post: post }> = ({ post }) => {
  console.log('Client', post);

  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
};

export default FirstPostPage;
