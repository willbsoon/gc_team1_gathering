import { SnapshotVo } from './snapshot-vo';

export interface SimpleReservationVo {
  reservationSeq: number;
  shopId: string;
  current: SnapshotVo;
}
