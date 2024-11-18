export interface Manga {
  id: string;
  title: string;
  is_serialized: boolean;
  magazine: Magazine;
  is_transferred: Magazine;
  covers: Cover[];
}

export interface Cover {
  cover: string;
  title: string;
}

export interface Magazine {
  id: string;
  name: string;
  logo: {
    url: string;
  };
  specialNumber: {
    id: string;
  };
}

export type mangaList = Manga[];
export type magazineList = Magazine[];

export type ViewMode = "series" | "all" | "serialized" | "magazine" | "count";
