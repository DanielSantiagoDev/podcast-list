// src/components/PodcastDetails.tsx
import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { PodcastTracks } from '../types/types';
import { usePodcast } from '../context/AppContext';

const PodcastDetails: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { podcasts, selectedPodcastTracks, setSelectedPodcast, loading, error } = usePodcast();
  React.useEffect(() => {
    setSelectedPodcast(podcasts.find(p => p.id.attributes['im:id'] === podcastId) || null);
  }, [podcastId, podcasts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading podcast tracks</div>;

  return (
    <div>
      <h1>Episodes</h1>
      <ul>
        {selectedPodcastTracks.map((track: PodcastTracks) => (
          <li key={track.trackId}>
            <h3>{track.trackName}</h3>
            <Link to={`/podcast/${podcastId}/episode/${track.trackId}`}>{track.trackName}</Link>
          </li>
        ))}
      </ul>
      <Outlet /> 
    </div>
  );
};

export default PodcastDetails;
