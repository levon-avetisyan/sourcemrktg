import { IReportData } from '../dashboard/interfaces.ts';

export function transformReportData(data: any): IReportData {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { inspectionsScheduled, companyLeadsReceived } = data;

  function buildInspectionOrLeadArray(type: string, count?: number): any[] | undefined {
    if (count === undefined) return undefined;
    const result = Array.from({ length: count }, (_, i) => {
      const item: any = {
        customerId: data[`customerId_${type}_${i}`],
        customerName: data[`customerName_${type}_${i}`],
        appointmentOutcome: data[`appointmentOutcome_${type}_${i}`],
      };

      [
        'closedOption',
        'installDate',
        'inspectionOutcome',
        'negativeOutcomeReason',
        'otherReasonNegativeOutcome',
      ].forEach((key) => {
        const value = data[`${key}_${type}_${i}`];
        if (value !== undefined && value !== null) {
          item[key] = value;
        }
      });

      return item;
    }).filter((item) => Object.keys(item).length > 0);

    return result.length > 0 ? result : undefined;
  }

  const result: any = {};

  [
    'reportDate',
    'location',
    'firstName',
    'lastName',
    'doorsKnocked',
    'appointmentsScheduled',
    'locationId',
  ].forEach((key) => {
    if (data[key] !== undefined) {
      result[key] = data[key];
    }
  });

  result.timezone = timezone;

  const scheduledInspections = buildInspectionOrLeadArray(
    'inspectionsScheduled',
    inspectionsScheduled
  );
  if (scheduledInspections) {
    result.inspectionsScheduledCount = inspectionsScheduled;
    result.scheduledInspections = scheduledInspections;
  }

  const companyLeads = buildInspectionOrLeadArray('companyLeadsReceived', companyLeadsReceived);
  if (companyLeads) {
    result.companyLeadsReceivedCount = companyLeadsReceived;
    result.companyLeadsReceived = companyLeads;
  }

  return result;
}
