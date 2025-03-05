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
}
