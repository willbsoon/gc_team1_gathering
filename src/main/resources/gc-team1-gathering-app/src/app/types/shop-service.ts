import { GeneralState } from "./general-state";
import { ShopServiceEmployee } from "./shop-service-employee";
import { ShopServiceServiceItem } from "./shop-service-service-item";

export interface ShopService {
  serviceSeq: number;
  shop: string;
  serviceName: string;
  ordering: number;
  state: GeneralState;
  configJson: string;
  shopServiceEmployees: ShopServiceEmployee[];
  shopServiceServiceItems: ShopServiceServiceItem[];
}
