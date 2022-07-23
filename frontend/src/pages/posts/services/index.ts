import { API_BASE_URL } from '../../../config';
import { IPost } from '../interfaces';

export const getPosts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);

    if (!response.ok) {
      throw Error('Error trying to get posts');
    }

    const posts: IPost[] = await response.json();

    return posts;
  } catch (err: any) {
    console.error('Error: ', err);
    throw Error(err.message);
  }
};
