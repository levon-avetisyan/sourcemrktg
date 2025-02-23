export interface IReport {
  _id: string;
  reportDate: string;
  location: string;
  first_name: string;
  last_name: string;
  doors_knocked: number;
  inspections_scheduled: number;
  self_gen_scheduled: number;
  self_gen_completed: number;
  self_gen_closed: number;
  company_leads_received: number;
  appointments_completed: number;
  company_leads_closed: number;
  time_studied_today: number;
  hardestObjection: string;
  createdAt: string;
  __v: number;
}
