// src/App.tsx
import React from 'react';
import { PodcastList } from './components/PodcastList';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <PodcastList />
        </main>
      </div>
    </Router>
  );
};

export default App;
