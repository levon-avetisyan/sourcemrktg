export interface IScheduledInspection {
  installDate?: string;
  closedOption?: string;
  customerId: string;
  customerName: string;
  appointmentOutcome: string; // e.g. "noShow" | "completedInspection"
  inspectionOutcome?: string; // e.g. "closed" | "notClosed"
  negativeOutcomeReason?: string; // e.g. "other", "noValue"
  otherReasonNegativeOutcome?: string;
}

export interface ICompanyLead {
  installDate?: string;
  closedOption?: string;
  customerId: string;
  customerName: string;
  appointmentOutcome: string; // e.g. "noShow" | "completedInspection"
  inspectionOutcome?: string; // e.g. "closed" | "notClosed"
  negativeOutcomeReason?: string; // e.g. "other", "noValue"
  otherReasonNegativeOutcome?: string;
}

export interface IReportData {
  reportDate: string; // or Date if you parse it
  location: string;
  customerId?: string;
  firstName: string;
  lastName: string;
  doorsKnocked: number;
  appointmentsScheduled: number;
  inspectionsScheduledCount: number;
  companyLeadsReceivedCount: number;
  scheduledInspections: IScheduledInspection[];
  companyLeadsReceived: ICompanyLead[];
  locationId: string;
  timezone: string;
  appointmentRate: number;
  completionRate: number;
  closeRate: number;
  conversionRate: number;
}

export interface IGetReportDataResponse {
  reports: IReportData[];
  currentPage: number;
  totalPages: number;
  totalReports: number;
  totalDoorsKnocked: number;
  appointmentsCompleted: number;
  totalScheduled: number;
  totalCompleted: number;
}
