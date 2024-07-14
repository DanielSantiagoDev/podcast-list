// src/components/PodcastList.tsx
import React from 'react';
import { usePodcasts } from '../hooks/usePodcasts';

export const PodcastList = () => {
  const { podcasts, loading, error } = usePodcasts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading podcasts</div>;

  return (
    <div>
      <h1>Podcast List</h1>
      <ul>
        {podcasts.map((podcast: any) => (
          <li key={podcast.id.attributes['im:id']}>
            {podcast.title.label} 
          </li>
        ))}
      </ul>
    </div>
  );
};
