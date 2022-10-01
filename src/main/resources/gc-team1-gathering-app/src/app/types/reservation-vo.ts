import { SnapshotVo } from './snapshot-vo';
import { ConsentVo } from './consent-vo';
import { ReservationRepeatParam } from "./reservation-repeat-param";
import { DepositVo } from "./deposit-vo";

export interface ReservationVo {
  reservationSeq: number;
  shopId: string;
  current: SnapshotVo;
  snapshots: SnapshotVo[];
  consents: ConsentVo[];
  repeat?: ReservationRepeatParam;
  deposit: DepositVo;
  isRegisteredSales: boolean;
}
