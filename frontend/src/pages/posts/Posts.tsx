import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import { createPost } from '../post/services';

import Post from './elements/Post';
import { usePosts } from './hooks';
import { IPost } from './interfaces';

const Posts = () => {
  const { posts: data, loading } = usePosts();

  const [isPosting, setIsPosting] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPost] = useState<IPost>({
    body: '',
    title: '',
    id: uuid(),
    userId: '1'
  });

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost((prevPost) => ({
      ...prevPost,
      [e.target.name]: e.target.value
    }));
  };

  const handleCreatePost = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsPosting(true);
      const createdPost = await createPost(post);

      setPosts((prevPosts) => [...prevPosts, createdPost]);
    } catch (err: any) {
      console.error('Error', err);
    } finally {
      setIsPosting(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <form onSubmit={handleCreatePost}>
        <div>
          <input
            placeholder='Title'
            value={post.title}
            name='title'
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            placeholder='Body'
            value={post.body}
            name='body'
            onChange={handleChange}
          />
        </div>
        <button type='submit' disabled={isPosting}>
          Create Post
        </button>
      </form>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
