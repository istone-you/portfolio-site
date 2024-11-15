export interface Manga {
  id: string;
  title: string;
  is_serialized: boolean;
  magazine: Magazine;
  covers: Cover[];
}

export interface Cover {
  volume: number;
  cover: string;
  title: string;
}

export type Magazine = {
  id: string;
  name: string;
  logo: {
    url: string;
  };
  specialNumber: {
    id: string;
  };
};

export type mangaList = Manga[];
export type magazineList = Magazine[];

export type ViewMode = "series" | "all" | "serialized" | "magazine" | "count";
