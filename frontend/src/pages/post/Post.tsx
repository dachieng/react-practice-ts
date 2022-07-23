import { Link, useParams } from 'react-router-dom';

import { usePost } from './hooks';

const Post = () => {
  const { postId } = useParams();
  const { post, loading, error } = usePost(postId);

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        <h1>Post Not Found! </h1>
        <p>Error: {error}</p>
        <Link to='/posts'>
          <button>Back to Posts</button>
        </Link>
      </div>
    );

  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
      </div>
    </div>
  );
};

export default Post;
