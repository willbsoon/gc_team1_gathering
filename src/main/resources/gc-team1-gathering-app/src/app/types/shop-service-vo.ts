import { EmployeeVo } from './employee-vo';
import { GeneralState } from './general-state';
import { ServiceItemVo } from './service-item-vo';
import { ShopServiceConfig } from './shop-service-config';

export interface ShopServiceVo {
  serviceSeq: number;
  serviceName: string;
  state: GeneralState;
  ordering: number;
  /**
   * TODO LAB-44 Employee 로 서버에서는 내려주지만, EmployeeVo 로 변경될것이라고 보고 EmployeeVo 를 매핑하였다.
   */
  employees: EmployeeVo[];
  serviceItems: ServiceItemVo[];
  config: ShopServiceConfig;
}
