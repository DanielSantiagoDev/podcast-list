// src/types/types.ts
// Define un tipo para las imágenes con altura como atributo
interface Image {
  label: string;
  attributes: {
    height: string;
  };
}

// Define un tipo para los precios con cantidad y moneda como atributos
interface Price {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
}

// Define un tipo para el contenido con término y etiqueta como atributos
interface ContentType {
  attributes: {
    term: string;
    label: string;
  };
}

// Define un tipo para los enlaces con relación, tipo y href como atributos
interface Link {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
}

// Define un tipo para el ID con etiqueta y un atributo adicional
interface ID {
  label: string;
  attributes: {
    'im:id': string;
  };
}

// Define un tipo para el artista con href como atributo
interface Artist {
  label: string;
  attributes: {
    href: string;
  };
}

// Define un tipo para la categoría con múltiples atributos
interface Category {
  attributes: {
    'im:id': string;
    term: string;
    scheme: string;
    label: string;
  };
}

// Define un tipo para la fecha de lanzamiento con etiqueta como atributo
interface ReleaseDate {
  label: string;
  attributes: {
    label: string;
  };
}

// Define el tipo principal para Podcast
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
