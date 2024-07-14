// src/components/PodcastList.tsx
import React from 'react';
import { usePodcasts } from '../hooks/usePodcasts';
import { Podcast } from '../types/types';

export const PodcastList = () => {
  const { podcasts, loading, error } = usePodcasts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading podcasts</div>;

  return (
    <div>
      <h1>Podcast List</h1>
      <ul>
        {podcasts.map((podcast: Podcast) => (
          <li key={podcast.id.label}>
            <h3>{podcast['im:name'].label}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
