// src/hooks/usePodcastDetails.ts
import { useState, useEffect } from 'react';
import { fetchPodcastDetails } from '../api/apiService';
import { PodcastTracks } from '../types/types';

export const usePodcastDetails = (podcastId: string) => {
  const [podcastDetails, setpodcastDetails] = useState<PodcastTracks[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchPodcastDetails(podcastId);
        setpodcastDetails(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  return { podcastDetails, loading, error };
};
