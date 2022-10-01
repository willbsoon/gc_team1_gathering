import { SalesItemVo } from "./sales-item-vo";

export interface SalesCategoryVo {
  ordering: number;
  salesCategoryName: string;
  salesCategorySeq: number;
  salesItems: SalesItemVo[];
  state: string;
}
