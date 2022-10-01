import { GeneralState } from './general-state';

export interface ServiceItemVo {
  serviceItemSeq: number;
  serviceItemName: string;
  ordering: number;
  serviceTime: number;
  state: GeneralState;
}
