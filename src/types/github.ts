export type githubAccount = string;

export interface RepoCategory {
  id: string;
  name: string;
  repositories: Repository[];
}

export type RepoCategories = RepoCategory[];

export interface Repository {
  id: string;
  title: string;
  detail: string;
  image: {
    url: string;
  };
  url: string;
  category: RepoCategory;
}

export type SelectRepoCategory = string;
export type SetSelectRepoCategory = React.Dispatch<
  React.SetStateAction<string>
>;

export interface LanguageRate {
  [language: string]: number;
}