// src/hooks/usePodcasts.ts
import { useState, useEffect } from 'react';
import { fetchPodcasts } from '../api/apiService';

export const usePodcasts = () => {
    const [podcasts, setPodcasts] = useState<any[]>([]);  
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(null);  

    useEffect(() => {
        const loadData = async () => {
        setLoading(true);
        try {
            const data = await fetchPodcasts();
            setPodcasts(data.feed.entry);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
        };

        loadData();
    }, []);

    return { podcasts, loading, error };
};
