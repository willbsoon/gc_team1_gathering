import { ShopVo } from './shop-vo';

export interface TeepeeUserVo {
  userSeq: number;
  name: string;
  isFridgeCrewMember: boolean;
  isShopMaster: boolean;

  managingShops: ShopVo[];
  managingShopIds: string[];

  /**
   * @Deprecated
   */
  assignedShopIds: string[];

  /**
   * @Deprecated
   */
  assignedShops: ShopVo[];


  memo: string;
  id: string;
  userAuthType: 'MANAGER' | 'EMPLOYEE';
}
