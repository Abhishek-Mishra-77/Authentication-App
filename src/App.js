import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ItemProvider from './ContextStore/ItemProvider';




function App() {
  return (
    <ItemProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/auth' element={<AuthPage />}></Route>
            <Route path='/profile' element={<UserProfile />}></Route>
          </Routes>
        </Layout>
      </Router>
    </ItemProvider>

  );
}

export default App;
