import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IPost } from '../interfaces';

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <div>{post.body}</div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Post;
