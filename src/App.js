import React, { useState } from 'react';
import './App.css';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
function App() {
  const [articles, setArticles] = useState([]);
  const handleCallback = (childData) => {
    setArticles(childData);
  };

  return (
    <div className='App'>
      <main>
        <Navbar cb={handleCallback} />
        <Routes articles={articles} />
      </main>
    </div>
  );
}

export default App;
