import { CustomerVo } from './customer-vo';
import { PetVo } from './pet-vo';

export interface FamilyVo {
  familySeq: number;
  shopId: string;
  customers: CustomerVo[];
  pets: PetVo[];
}
