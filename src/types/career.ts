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
  carrerDatas: CarrerData[];
}

export interface CareerContentProps {
  carrerData: CarrerData;
}

export interface WorkProps {
  work: Work;
}
