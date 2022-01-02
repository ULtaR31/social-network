import React from 'react';
import './App.css';

import Header from './componets/header/header';
import NavBar from './componets/NavBar/NavBar';
import Profile from "./componets/Profile/Profile";

function App() {
  return (
    <div className="app_wrapper">
        <Header />
        <NavBar />
        <Profile />
    </div>
  );
}
export default App;
