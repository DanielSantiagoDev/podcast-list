// src/types/types.ts

interface Image {
  label: string;
  attributes: {
    height: string;
  };
}

interface Price {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
}

interface ContentType {
  attributes: {
    term: string;
    label: string;
  };
}

interface Link {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
}

interface ID {
  label: string;
  attributes: {
    'im:id': string;
  };
}

interface Artist {
  label: string;
  attributes: {
    href: string;
  };
}

interface Category {
  attributes: {
    'im:id': string;
    term: string;
    scheme: string;
    label: string;
  };
}

interface ReleaseDate {
  label: string;
  attributes: {
    label: string;
  };
}

export interface Podcast {
  'im:name': { label: string };
  'im:image': Image[];
  summary: { label: string };
  'im:price': Price;
  'im:contentType': ContentType;
  rights: { label: string };
  title: { label: string };
  link: Link;
  id: ID;
  'im:artist': Artist;
  category: Category;
  'im:releaseDate': ReleaseDate;
}

export interface PodcastTracks {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl600: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  genreIds: string[];
  genres: string[];
}
