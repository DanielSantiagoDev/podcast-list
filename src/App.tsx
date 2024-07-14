// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PodcastList } from './components/PodcastList';
import PodcastDetails from './components/PodcastDetails';
import EpisodeDetails from './components/EpisodeDetails';

import Header from './components/Header';
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PodcastList />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetails />}>
            <Route path="episode/:episodeId" element={<EpisodeDetails />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
