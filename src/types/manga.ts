export interface Manga {
  id: string;
  title: string;
  is_serialized: boolean;
  magazine: string;
  covers: Cover[];
}

export interface Cover {
  volume: number;
  cover: string;
  title: string;
}

export interface SingleManga {
  id: string;
  title: string;
  cover: string;
  main: boolean;
}

export type mangaList = Manga[];
export type singleMangaList = SingleManga[];
