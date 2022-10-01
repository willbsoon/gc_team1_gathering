import { VoucherTemplateVo } from "./voucher-template-vo";
import { VoucherVo } from "./voucher-vo";
import { VoucherHistoryVo } from "./voucher-history-vo";

export interface VoucherDetailVo {
  voucherTemplate: VoucherTemplateVo;
  vouchers: VoucherVo[];
  histories: VoucherHistoryVo[];
}
