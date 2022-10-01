import { GeneralState } from './general-state';
import { PhoneNumber } from './phone-number';
import { PetVo } from './pet-vo';

export interface CustomerVo {
  shopId: string;
  customerSeq: number;
  state: GeneralState;

  name: string;
  callName: string;
  mobilePhone1: PhoneNumber;
  phone1: PhoneNumber;
  phone2: PhoneNumber;
  email: string;
  isReceiveAlimtalk: boolean;
  zipCode: string;
  addr1: string
  addr2: string;
  reservationCount: number;
  doneCount: number;
  cancelCount: number;
  noshowCount: number;
  memo: string;
  regDateTime: string;

  familySeq: number;
  pets: PetVo[];

  salesAmount: number;
  salesCount: number;
}
