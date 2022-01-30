import { readdir, readFile } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';
import { Post } from '../types';
import PostPage from '../pages/posts/[slug]';

export const getPost = async (slug: string): Promise<Post> => {
  const source = await readFile(`content/posts/${slug}.md`, 'utf8');
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(source);
  return {
    date,
    title,
    body,
  };
};

export const getPosts = async () => {
  const slugs = await getSlug();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }
  return posts;
};

export const getSlug = async () => {
  const suffix = '.md';
  const files = await readdir('content/posts');
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
};
