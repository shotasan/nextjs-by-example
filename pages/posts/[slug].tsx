import Head from 'next/head';
import { getPost, getSlug } from '../../lib/posts';
import { Post } from '../../types/index';

// SSGの場合に必要
export const getStaticPaths = async () => {
  const slugs = await getSlug();
  console.log(slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    // 404を返すかの設定
    fallback: false,
  };
};

// ビルド時に実行
export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  // サーバーログにしか記録されない
  console.log('[PostPage] getStaticProps():', slug);
  const post: Post = await getPost(slug);
  return {
    props: { post },
  };
};

const PostPage = ({ post }: { post: Post }) => {
  console.log('[PostPage] render:', post);
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }}></article>
      </main>
    </>
  );
};

export default PostPage;
