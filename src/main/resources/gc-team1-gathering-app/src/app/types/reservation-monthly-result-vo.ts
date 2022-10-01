import { MonthlyReservationVo } from "./monthly-reservation-vo";

export interface ReservationMonthlyResultVo {
  startDate: string;
  endDate: string;
  reservations: MonthlyReservationVo[];
}
