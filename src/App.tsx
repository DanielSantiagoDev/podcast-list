// src/App.tsx
import React from 'react';
import { PodcastList } from './components/PodcastList';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Podcast Browser</h1>
      </header>
      <main>
        <PodcastList />
      </main>
    </div>
  );
};

export default App;
