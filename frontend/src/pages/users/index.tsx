import { Navigate, useLocation } from 'react-router-dom';

const Users = () => {
  const location = useLocation();

  console.log('Location', location);

  if (location.pathname === '/users') return <Navigate to='/' />;

  return <div>Users Page</div>;
};

export default Users;
