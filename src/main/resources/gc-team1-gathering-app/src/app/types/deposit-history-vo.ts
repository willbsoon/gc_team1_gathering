import { DepositStatus } from "./deposit-status";

export interface DepositHistoryVo {
  historySeq: number;
  depositSeq: number;
  refundStandard: string;
  refundValue: number;
  refundAmount: number;
  status: DepositStatus;
  regDateTime: string;
}
