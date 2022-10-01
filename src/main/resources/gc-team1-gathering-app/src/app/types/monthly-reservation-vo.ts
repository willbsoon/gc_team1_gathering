import { ReservationStatus } from "./reservation-status";
import { PetVo } from "./pet-vo";
import { EmployeeVo } from "./employee-vo";
import { ServiceItemVo } from "./service-item-vo";
import { ShopService } from "./shop-service";

export interface MonthlyReservationVo {
  reservationSeq: number;
  visitDateTime: string;
  visitEndDateTime: string;
  customerName: string;
  customerSeq?: number;
  reservationMemo: string;
  //TODO 수정 필요
  pets: PetVo[];
  employees: EmployeeVo[];
  shopServices: ShopService[];
  serviceItems: ServiceItemVo[];
  state: ReservationStatus;
}
