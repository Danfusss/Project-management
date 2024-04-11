interface CardConfig {
  page: number;
  _id: string;
  status: string;
  time: string;
  clientName: string;
  name: string;
  number: string;
  description: string;
  industryName: string;
  endDate: string;
  startDate: string;
  city: string;
  leaders: Array<LeadersInfo>;
}
interface LeadersInfo {
  id: string;
  name: string;
  roles: string;
}

export type { CardConfig, LeadersInfo };
