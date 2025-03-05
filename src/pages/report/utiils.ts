import { ICompanyLead, IReportData, IScheduledInspection } from '../dashboard/interfaces.ts';
import { locationId } from '../../constants';

export function transformReportData(data: any): IReportData {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const {
    reportDate,
    location,
    first_name,
    last_name,
    doors_knocked,
    inspections_scheduled,
    company_leads_received,
    appointments_scheduled,
  } = data;

  // Build the scheduledInspections array.
  const scheduledInspections: IScheduledInspection[] = [];
  for (let i = 0; i < (inspections_scheduled ?? 0); i++) {
    const customerId = data[`customer_id_inspections_scheduled_${i}`];
    const customerName = data[`customer_name_inspections_scheduled_${i}`] ?? '';
    const appointmentOutcome = data[`appointment_outcome_inspections_scheduled_${i}`] ?? '';

    const inspectionOutcome = data[`inspection_outcome_inspections_scheduled_${i}`];
    const negativeOutcomeReason = data[`negative_outcome_reason_inspections_scheduled_${i}`];
    const otherReasonNegativeOutcome =
      data[`other_reason_negative_outcome_inspections_scheduled_${i}`];

    // Construct each item
    const item: IScheduledInspection = {
      customerId,
      customerName,
      appointmentOutcome,
    };

    // Conditionally add optional fields if they exist
    if (inspectionOutcome) {
      item.inspectionOutcome = inspectionOutcome;
    }
    if (negativeOutcomeReason) {
      item.negativeOutcomeReason = negativeOutcomeReason;
    }
    if (otherReasonNegativeOutcome) {
      item.otherReasonNegativeOutcome = otherReasonNegativeOutcome;
    }

    scheduledInspections.push(item);
  }

  // Build the companyLeadsReceived array.
  const companyLeadsReceived: ICompanyLead[] = [];
  for (let i = 0; i < (company_leads_received ?? 0); i++) {
    const customerId = data[`customer_id_company_leads_received_${i}`];
    const customerName = data[`customer_name_company_leads_received_${i}`] ?? '';
    const appointmentOutcome = data[`appointment_outcome_company_leads_received_${i}`] ?? '';

    const inspectionOutcome = data[`inspection_outcome_company_leads_received_${i}`];
    const negativeOutcomeReason = data[`negative_outcome_reason_company_leads_received_${i}`];
    const otherReasonNegativeOutcome =
      data[`other_reason_negative_outcome_company_leads_received_${i}`];

    const item: ICompanyLead = {
      customerId,
      customerName,
      appointmentOutcome,
    };

    if (inspectionOutcome) {
      item.inspectionOutcome = inspectionOutcome;
    }
    if (negativeOutcomeReason) {
      item.negativeOutcomeReason = negativeOutcomeReason;
    }
    if (otherReasonNegativeOutcome) {
      item.otherReasonNegativeOutcome = otherReasonNegativeOutcome;
    }

    companyLeadsReceived.push(item);
  }

  // Return the reorganized structure.
  return {
    reportDate,
    location,
    firstName: first_name,
    lastName: last_name,
    doorsKnocked: doors_knocked ?? 0,
    appointmentsScheduled: appointments_scheduled ?? 0,
    inspectionsScheduledCount: inspections_scheduled ?? 0,
    companyLeadsReceivedCount: company_leads_received ?? 0,
    scheduledInspections,
    companyLeadsReceived,
    locationId: locationId,
    timezone: timezone,
  };
}
