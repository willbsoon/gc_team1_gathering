import { ShopServiceVo } from "./shop-service-vo";
import { CustomerVo } from "./customer-vo";
import { PetVo } from "./pet-vo";
import { FamilyVo } from "./family-vo";
import { EmployeeVo } from "./employee-vo";
import { ServiceItemVo } from "./service-item-vo";
import { ReservationStatus } from "./reservation-status";

export interface SnapshotVo {
  reservationSeq: number;
  status: ReservationStatus;
  visitDateTime: string;
  visitEndDateTime: string;
  memo: string;

  customer: CustomerVo;
  family: FamilyVo;
  petCount: number;
  pets: PetVo[];
  /**
   * TODO api 서버에서는 ShopService 를 내려주고 있다. api 서버에서 ShopServiceVo 로 변경될거라고 가정하고 작성되었다.
   */
  shopServices: ShopServiceVo[];
  employees: EmployeeVo[];
  /**
   * TODO api 서버에서는 ServiceItem 를 내려주고 있다. api 서버에서 ServiceItemVo 로 변경될거라고 가정하고 작성되었다.
   */
  serviceItems: ServiceItemVo[];
  regDateTime: string;
}
