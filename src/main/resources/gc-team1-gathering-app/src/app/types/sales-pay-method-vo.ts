import { VoucherType } from "./voucher-type";
import { PayType } from "../components/custom-form-field/sales-payment/pay-type";

export interface SalesPayMethodVo {

  payType: PayType;
  voucherTemplateSeq: number;
  voucherTemplateType: VoucherType;
  voucherSeq: number;
  payAmount: number;
  payCount: number;
  payMinutes: number;
}
