import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import CreatePage from './pages/CreatePage'
import LoginPage from './pages/LoginPage'
import EditPage from './pages/EditPage'
import Header from './common/Header'

function App() {
  
  return (
    <div>
      <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/create" element={<CreatePage/>} />
          <Route path="/edit"  element={<EditPage/>} />
        </Routes>
    </div>
  );
}

export default App;
