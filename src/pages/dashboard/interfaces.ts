export interface IScheduledInspection {
  installDate?: string;
  closedOption?: string;
  customerId: string;
  customerName: string;
  appointmentOutcome: string; // e.g. "noShow" | "completedInspection"
  inspectionOutcome?: string; // e.g. "closed" | "notClosed"
  negativeOutcomeReason?: string; // e.g. "other", "noValue"
  otherReasonNegativeOutcome?: string;
  isInstallDatePass2Days?: string;
  otherReasonWhyPassed2Days?: string;
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
  isInstallDatePass2Days?: string;
  otherReasonWhyPassed2Days?: string;
}

export interface IReportData {
  _id: any;
  reportDate: string; // or Date if you parse it
  location: string;
  timezone: string;
  locationId: string;
  installer: string;
  customerId?: string;
  firstName: string;
  lastName: string;
  doorsKnocked: number;
  appointmentsScheduled: number;
  completedSelfGenInspections: number;
  closedScheduledInspections: number;
  totalCompanyLeadsReceived: number;
  completedCompanyLeads: number;
  closedCompanyLeads: number;
  totalNumberOfAppointments: number;
  inspectionsScheduledCount: number;
  scheduledInspections: IScheduledInspection[];
  companyLeadsReceived: ICompanyLead[];
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
