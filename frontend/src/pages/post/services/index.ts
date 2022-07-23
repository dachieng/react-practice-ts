import { API_BASE_URL, getFetchConfig } from '../../../config';
import { IPost } from '../interfaces';

export const getPost = async (postId: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`);

    if (!response.ok) {
      if (response.status === 404) throw Error('Post not found');

      throw Error('Error trying to get post');
    }

    const post: IPost = await response.json();

    return post;
  } catch (err: any) {
    console.error('Error: ', err.message);
    throw Error(err.message);
  }
};

export const createPost = async (data: IPost): Promise<IPost> => {
  try {
    const config = getFetchConfig('POST', undefined, data);

    const response = await fetch(`${API_BASE_URL}/posts`, config);

    if (!response.ok) {
      throw Error('Error trying to create a post');
    }

    const post = response.json();

    return post;
  } catch (err: any) {
    console.error('Error: ', err.message);
    throw Error(err.message);
  }
};
