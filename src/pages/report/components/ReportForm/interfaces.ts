export interface IInspectionScheduled {
  customerName: string;
  customerId?: string;
  appointmentOutcome: string;
  inspectionOutcome?: string;
  closedOption?: string;
  installDate?: string;
  negativeOutcomeReason?: string;
  otherReasonNegativeOutcome?: string;
}

export interface ICompanyScheduledLeads extends IInspectionScheduled {
  customerId: string;
}

export interface IAdditionalRows {
  inspectionsScheduled: IInspectionScheduled[];
  companyLeadsReceived: ICompanyScheduledLeads[]; // Adjust type if needed
}

export interface IInspectionScheduled {
  [key: string]: any;
}
export interface IAdditionalRow {
  [key: string]: any;
}

export interface ICompanyScheduledLeads {
  [key: string]: any; // Define specific properties for this type if needed
}

export interface IAdditionalRows {
  inspectionsScheduled: IInspectionScheduled[];
  companyLeadsReceived: ICompanyScheduledLeads[];
  [key: string]: IAdditionalRow[] | ICompanyScheduledLeads[]; // Allow dynamic keys with appropriate types
}

export interface IReportState {
  additionalRows: IAdditionalRows;
  showAppointmentsScheduled: boolean;
}
