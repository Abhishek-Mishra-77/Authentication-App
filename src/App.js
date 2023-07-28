import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import PrivateRoutes from './components/Auth/PrivateRoutes/PrivateRoutes';


function App() {


  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/auth' element={<AuthPage />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path='profile' element={<UserProfile />}></Route>
          </Route>
          <Route path='*' element={<p>Path is Not Match!</p>}/>
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
