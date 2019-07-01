import React from 'react';
import './App.css';
import Routes from './routes'
import isAuthenticated from './services/auth'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      {
        isAuthenticated()? (
        <Navbar />
        ): (
          null
        )
      }
      <Routes />
    </div>
  );
}

export default App;
