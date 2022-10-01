import { SnapshotVo } from "./snapshot-vo";

export interface ReservationCustomerSearchResultVo {
  currentPage: number;
  pageSize: number;
  snapshots: SnapshotVo[];
  totalElements: number;
  totalPages: number;
}
