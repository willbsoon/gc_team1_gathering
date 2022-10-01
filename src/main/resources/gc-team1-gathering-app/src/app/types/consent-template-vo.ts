import { AgreementMaster } from './agreement-master';

export interface ConsentTemplateVo {
  consentTemplateSeq: number;
  templateName: string;
  content: string;
  contentForConsent: string;
  isUsing: boolean;
  agreements: AgreementMaster[];
  ordering: number;
  isDefault: boolean;
}
