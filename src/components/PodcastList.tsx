// src/components/PodcastList.tsx
import React from 'react';
import { usePodcast } from '../context/AppContext';
import { Podcast } from '../types/types';
import { Link } from 'react-router-dom';

export const PodcastList: React.FC = () => {
  const { podcasts, loading, error  } = usePodcast();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading podcasts</div>;

  return (
    <div>
      <h1>Podcast List</h1>
      <ul>
        {podcasts.map((podcast: Podcast) => (
          <li key={podcast.id.attributes['im:id']}>
            <Link to={`/podcast/${podcast.id.attributes['im:id']}`}>
              <h3>{podcast['im:name'].label}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
