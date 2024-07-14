// src/context/PodcastContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react';
import { Podcast, PodcastTracks } from '../types/types';
import { fetchPodcasts, fetchPodcastDetails } from '../api/apiService';

interface PodcastContextType {
  podcasts: Podcast[];
  setPodcasts: React.Dispatch<React.SetStateAction<Podcast[]>>;
  selectedPodcast: Podcast | null;
  setSelectedPodcast: React.Dispatch<React.SetStateAction<Podcast | null>>;
  selectedPodcastTracks: PodcastTracks[];
  setSelectedPodcastTracks: React.Dispatch<
    React.SetStateAction<PodcastTracks[]>
  >;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const PodcastContext = createContext<PodcastContextType | undefined>(undefined);

interface PodcastProviderProps {
  children: ReactNode;
}

export const PodcastProvider: React.FC<PodcastProviderProps> = ({
  children
}) => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);
  const [selectedPodcastTracks, setSelectedPodcastTracks] = useState<
    PodcastTracks[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPodcasts = async () => {
      setLoading(true);
      try {
        const data = await fetchPodcasts();
        setPodcasts(data);
        setError('');
      } catch (e) {
        setError('Failed to fetch podcasts');
        console.error(e);
      }
      setLoading(false);
    };

    loadPodcasts();
  }, []);

  useEffect(() => {
    const loadEpisodes = async () => {
      if (selectedPodcast) {
        setLoading(true);
        try {
          const data = await fetchPodcastDetails(
            selectedPodcast.id.attributes['im:id']
          );
          setSelectedPodcastTracks(data);
          setError('');
        } catch (e) {
          setError('Failed to fetch episodes');
          console.error(e);
        }
        setLoading(false);
      }
    };

    loadEpisodes();
  }, [selectedPodcast]);

  return (
    <PodcastContext.Provider
      value={{
        podcasts,
        setPodcasts,
        selectedPodcast,
        setSelectedPodcast,
        selectedPodcastTracks,
        setSelectedPodcastTracks,
        loading,
        setLoading,
        error,
        setError
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export const usePodcast = () => {
  const context = useContext(PodcastContext);
  if (context === undefined) {
    throw new Error('usePodcast should be usedd withing the provider');
  }
  return context;
};
