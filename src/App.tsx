import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="container m-4 mx-auto my-auto h-screen text-center">
      <div className="container m-6 mx-auto rounded-md bg-dimgray p-4">
        <h1>My expenses</h1>
      </div>
      <Dashboard />
    </div>
  );
};

export default App;
