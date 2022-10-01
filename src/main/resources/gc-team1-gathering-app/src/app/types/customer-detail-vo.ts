import { CustomerVo } from "./customer-vo";
import { FamilyVo } from "./family-vo";

export interface CustomerDetailVo {
  customers: CustomerVo[];
  families: { [seq: number]: FamilyVo };
}
