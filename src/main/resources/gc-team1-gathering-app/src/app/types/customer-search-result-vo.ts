import { CustomerVo } from "./customer-vo";

export interface CustomerSearchResultVo {
  totalElements: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
  results: CustomerVo[];
}
