export interface IEventData {
  source: string;
  referrer: string | null;
  adSource: string;
  page: {
    url: string;
    title: string;
  };
  timestamp: number;
  contactSessionIds: string[] | null;
  fbp: string;
  fbc: string;
  type: string;
  parentId: string;
  pageVisitType: string;
  domain: string;
  version: string;
  parentName: string;
  fingerprint: string | null;
  documentURL: string;
  fbEventId: string;
  medium: string;
  mediumId: string;
}

export interface IOthers {
  firstName: string;
  lastName: string;
  dyLyMnuHyRfPXMHvWqXY: number;
  G0rXTP9kVkyM5y72ubtE: number;
  GdT8JAd45mBmgcJfxNPR: number;
  Xhx4ydLYrNUDNclS6g7K: number;
  LqtXrkxu3fI8TVlqJGrW: number;
  mWc5hUsxglivQR4d9ij4: number;
  yEqrmDF3gm0axbSNhpGy: number;
  wY2MpnvLOPD0XOK5tigo: number;
  formId?: string;
  locationId?: string;
  sessionId?: string;
  eventData?: IEventData;
  sessionFingerprint?: string;
  Timezone?: string;
  fieldsOriSequance?: string[];
  submissionId: string;
  signatureHash?: string;
  ip?: string;
}
