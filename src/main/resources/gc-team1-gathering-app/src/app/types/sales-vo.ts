import { SalesEmployeeVo } from "./sales-employee-vo";
import { SalesPayMethodVo } from "./sales-pay-method-vo";
import { SalesPetVo } from "./sales-pet-vo";
import { SalesEntryVo } from "./sales-entry-vo";

export interface SalesVo {
  customerSeq: number;
  employees: SalesEmployeeVo[];
  memo: string;
  payMethods: SalesPayMethodVo[];
  pets: SalesPetVo[],
  reservationSeq: number;
  salesDateTime: string;
  salesEntries: SalesEntryVo[];
  salesSeq: number;
  shopId: string;
  totalAmount: number;
  totalDiscountAmount: number;
}
