import { useCallback, useEffect, useState } from 'react';
import { IPost } from '../interfaces';
import { getPosts } from '../services';

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const postsData = await getPosts();
      setPosts(postsData);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    error,
    loading,
    refetch: fetchPosts
  };
};
