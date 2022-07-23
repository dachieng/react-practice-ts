import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Error404 from './pages/error';
import User from './pages/users/[userId]';
import Users from './pages/users';
import Posts from './pages/posts/Posts';
import Post from './pages/post/Post';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/user/:userId' element={<User />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/post/:postId' element={<Post />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
