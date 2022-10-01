import { CustomerVo } from "./customer-vo";
import { VoucherTemplateVo } from "./voucher-template-vo";
import { VoucherOperationType } from "./voucher-operation-type";

export interface VoucherHistoryVo {

  voucherHistorySeq: number;
  voucherTemplateSeq: number;
  voucherSeq: number;
  shopId: string;
  familySeq: number;
  customerSeq: number;
  operation: VoucherOperationType;
  count: number;
  amount: number;
  minutes: number;
  memo: string;
  expiresDateTime: string;
  regDateTime: string;
  voucherTemplate: VoucherTemplateVo;
  customer: CustomerVo;
}
