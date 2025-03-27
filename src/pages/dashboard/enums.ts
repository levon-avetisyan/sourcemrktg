export enum APPOINTMENT_OUTCOME {
  noShow = 'No show',
  completedInspection = 'Completed inspection',
  alreadyHasService = 'Already has service',
  renterMultiFamily = 'Renter/Multi-family',
  knockOut = 'Knock-out',
  turnedAway = 'Turned away',
}

export enum INSPECTION_OUTCOME {
  closed = 'Closed/Sold',
  notClosed = "Didn't close",
}

export enum NEGATIVE_OUTCOME_REASON {
  money = 'Money',
  unsatisfiedCustomer = 'Unsatisfied Customer',
  noDecisionMaker = 'No decision maker',
  moving = 'Moving',
  newBuild = 'New build',
  noValue = 'No value',
}

export enum POSITIVE_OUTCOME_TYPE {
  initialInstallCharged = 'Initial Install Charged',
  monthlyRecurringPayment = 'Monthly Recurring Payment',
  scheduledInstallDate = 'Scheduled Install Date',
}

export enum PASS_2_DAYS_REASON {
  techAvailability = 'Tech Availability',
  moneyAvailability = 'Money Availability',
  customerAvailability = 'Customer Availability',
  other = 'Other',
}

const OnboardingStatus = Object.freeze({
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  FAILED: 'failed',
});

export default OnboardingStatus;
