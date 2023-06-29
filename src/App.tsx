import React from 'react';
import './App.css';
import Router from './pages/Router';
import Providers from './core/providers/Providers';

function App() {
  return (
    <div className="App">
      <Providers>
        <Router />
      </Providers>
    </div>
  );
}

export default App;
