// src/api/apiService.ts
import { Podcast } from '../types/types';
const API_BASE_URL =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

export const fetchPodcasts = async (): Promise<Podcast[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return (await response.json()).feed.entry as Podcast[];
  } catch (error) {
    console.error('There was a problem with the podcast provider:', error);
    throw error;
  }
};
