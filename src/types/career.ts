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

export interface CarrerData {
  id: string;
  name: string;
  period: string;
  works: Work[];
}

export interface CarrerDatas {
  contents: CarrerData[];
}

export interface CareerContentProps {
  content: CarrerData;
}

export interface WorkProps {
  work: Work;
}
