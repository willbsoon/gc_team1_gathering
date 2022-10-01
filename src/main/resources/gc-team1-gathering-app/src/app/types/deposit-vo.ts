import { DepositStatus } from "./deposit-status";

export interface DepositVo {

  depositSeq: number;

  shopId: string;

  reservationSeq: number;

  dueDateTime: string;

  depositAmount: number;

  refundAmount: number;

  settlementSeq: number;

  status: DepositStatus;

  modDateTime: string;
}
