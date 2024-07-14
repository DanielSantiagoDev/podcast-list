// src/components/PodcastDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { PodcastTracks } from '../types/types';
import { usePodcastDetails } from '../hooks/usePodcastDetails';

const PodcastDetails: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { podcastDetails, loading, error } = usePodcastDetails(podcastId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading podcast tracks</div>;

  return (
    <div>
      <h1>Episodes</h1>
      <ul>
        {podcastDetails.map((track: PodcastTracks) => (
          <li key={track.trackId}>
            <h3>{track.trackName}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastDetails;