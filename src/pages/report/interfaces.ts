export interface IFormField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select' | 'checkbox' | 'radio' | 'textarea';
  required?: boolean;
  tooltip?: string;
  category?: string;
  gridSpan?: number;
  options: [];
  placeholder?: string;
  isExpandable?: boolean;
}

export interface IFormData {
  reportDate: string; // e.g. "2025-03-06T20:00:00.000Z"
  location: string;
  installer: string;
  first_name: string;
  last_name: string;
  doors_knocked: number;
  inspections_scheduled: number;
  company_leads_received: number;
  appointments_scheduled: number;

  // Inspections Scheduled (dynamic index for each scheduled inspection)
  [key: string]: string | number | undefined;
}
