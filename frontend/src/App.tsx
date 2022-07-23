import React from 'react';
import AppRoutes from './routes';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className='App'>
      <AppRoutes />
    </div>
  );
};

export default App;
