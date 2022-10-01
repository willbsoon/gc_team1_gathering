import { ConsentState } from './consent-state';
import { CustomerVo } from './customer-vo';
import { ConsentTemplateVo } from './consent-template-vo';
import { ReservationVo } from './reservation-vo';

export interface ConsentVo {
  consentId: string;
  agreeCodes: string;
  status: ConsentState;
  consentDateTime: string;
  regDateTime: string;
  customer: CustomerVo;
  consentTemplate: ConsentTemplateVo;
  reservation: ReservationVo;
}
