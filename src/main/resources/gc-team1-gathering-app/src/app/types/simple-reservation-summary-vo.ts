export interface SimpleReservationSummaryVo {
  type?: "CUSTOMER" | "FAMILY"; // CUSTOMER OR FAMILY
  total: number;
  completed: number;
  cancelled: number;
  noshow: number;
}
