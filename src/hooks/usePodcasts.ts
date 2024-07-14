// src/hooks/usePodcasts.ts
import { useState, useEffect } from 'react';
import { fetchPodcasts } from '../api/apiService';
import { Podcast } from '../types/types';

export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchPodcasts();
        setPodcasts(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  return { podcasts, loading, error };
};
