import { ReservationRepeatKind } from "./reservation-repeat-kind";
import { ReservationRepeatMonthDay } from "./reservation-repeat-month-day";

export interface ReservationRepeatParam {
  repeatSeq: number;
  isRepeat: boolean;
  repeatKind: ReservationRepeatKind;
  repeatWeekDay: number[];
  repeatMonthDay: ReservationRepeatMonthDay;
  repeatPeriod: number;
  repeatStartDateTime: string;
  repeatEndDateTime: string;
  repeatDayPeriod: number;
}
