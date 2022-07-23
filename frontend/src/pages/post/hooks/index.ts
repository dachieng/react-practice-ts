import { useCallback, useEffect, useState } from 'react';

import { IPost } from '../interfaces';
import { getPost } from '../services';

export const usePost = (postId?: string) => {
  const [post, setPost] = useState<Partial<IPost>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPost = useCallback(async (postId: string) => {
    try {
      setLoading(true);

      const postData = await getPost(postId);

      setPost(postData);
      setError(null);
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (postId) {
      fetchPost(postId);
    }
  }, [fetchPost, postId]);

  return {
    post,
    loading,
    error
  };
};
