import {GeneralState} from "./general-state";

export interface EmployeeVo {
  employeeSeq: number;
  employeeName: string;
  shopId: string;
  state: GeneralState;
  ordering: number;
  isUnassigned: boolean;
}
