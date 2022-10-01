import { ReservationVo } from "./reservation-vo";
import { SimpleReservationSummaryVo } from "./simple-reservation-summary-vo";

export interface ReservationHistoryVo {
  reservations: ReservationVo[],
  customerSummary: SimpleReservationSummaryVo,
  familySummary: SimpleReservationSummaryVo,
}
