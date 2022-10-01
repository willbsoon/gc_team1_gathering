import { GeneralState } from "./general-state";
import { DepositConfigDueDateVo } from "./deposit-config-due-date-vo";
import { DepositConfigRefundVo } from "./deposit-config-refund-vo";

export interface DepositConfigVo {

  depositConfigSeq: number;
  shopId: string;
  checkDefaultYn: boolean;
  depositAmount: number;
  depositGuide: string;
  depositConfigDueDates: DepositConfigDueDateVo[];
  depositConfigRefunds: DepositConfigRefundVo[];
  status: GeneralState;
}
