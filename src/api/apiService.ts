// src/api/apiService.ts
import { Podcast, PodcastTracks } from '../types/types';
const API_BASE_URL =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

// Helper function to check cache validity
const isCacheValid = (key: string, hours: number = 24): boolean => {
  const cacheEntry = localStorage.getItem(key);
  if (!cacheEntry) return false;

  const { timestamp } = JSON.parse(cacheEntry);
  const age = (Date.now() - timestamp) / (1000 * 60 * 60);
  return age < hours;
};

// Helper function to set cache
const setCache = (key: string, data: any) => {
  const cacheEntry = {
    data,
    timestamp: Date.now()
  };
  localStorage.setItem(key, JSON.stringify(cacheEntry));
};

export const fetchPodcasts = async (): Promise<Podcast[]> => {
  try {
    const url = `${API_BASE_URL}`;
    if (isCacheValid(url)) {
      //we use the URL as cache key
      const cachedData = JSON.parse(localStorage.getItem(url)!);
      return cachedData.data;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = (await response.json()).feed.entry;
    setCache(url, data);
    return data as Podcast[];
  } catch (error) {
    console.error('There was a problem with the podcast provider:', error);
    throw error;
  }
};

export const fetchPodcastDetails = async (
  podcastId: string
): Promise<PodcastTracks[]> => {
  const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast
&entity=podcastEpisode&limit=20`;
  if (isCacheValid(url)) {
    //we use the URL as cache key
    const cachedData = JSON.parse(localStorage.getItem(url)!);
    return cachedData.data;
  }
  const response = await fetch(url);
  if (!response.ok) throw new Error('Network response was not ok');
  const data = (await response.json()).results;
  setCache(url, data);
  return data as PodcastTracks[];
};
