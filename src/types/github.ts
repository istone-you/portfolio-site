export interface AccountData {
  url: string;
}

export interface AccountDataProps {
  accountUrl: AccountData;
}

export interface RepoCategory {
  name: string;
  repository: RepoData[];
}

export interface RepoData {
  id: string;
  title: string;
  detail: string;
  image: {
    url: string;
  };
  url: string;
  category: RepoCategory;
}

export interface RepoCategoryProps {
  repoCategory: RepoCategory[];
}
