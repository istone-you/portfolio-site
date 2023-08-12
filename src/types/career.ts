export interface Work {
  id: string;
  title: string;
  period: string;
  occupation: string;
  overview: string;
  detail: string;
  point: string;
  number: number;
}

export interface Company {
  id: string;
  name: string;
  period: string;
  works: Work[];
}

export type Companies = Company[];
