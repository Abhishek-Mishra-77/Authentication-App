import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { ItemProviderContext } from './ContextStore/ItemProvider';


function App() {


     const AuthContext = useContext(ItemProviderContext);
     const isLoggegIn = AuthContext.isLoggegIn;



  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          {!isLoggegIn && <Route path='/auth' element={<AuthPage />}></Route>}
          {isLoggegIn && <Route path='profile' element={<UserProfile />}></Route>}
          <Route path='*' element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
