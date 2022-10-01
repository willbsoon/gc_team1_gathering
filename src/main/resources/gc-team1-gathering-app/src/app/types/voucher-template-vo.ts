import { VoucherVo } from "./voucher-vo";
import { VoucherType } from "./voucher-type";

export interface VoucherTemplateVo {
  isAlimTalkOn: boolean;
  isEnabled: boolean;
  ordering: number;
  shopId: string;
  state: string;
  voucherTemplateName: string;
  voucherTemplateSeq: number;
  voucherTemplateType: VoucherType;
  vouchers: VoucherVo[];
}
