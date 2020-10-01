import React from 'react';

import Users from './pages/Users';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Users />
      <GlobalStyle />
    </>
  );
};

export default App;
