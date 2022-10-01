import { PhoneNumber } from "./phone-number";

export interface ShopProfileVo {
  shopId: string;
  shopName: string;
  phoneNumber: PhoneNumber;
  fax: PhoneNumber;
  zipCode: string;
  addrRoadName: string;
  addrJibun: string;
  lat: number;
  lon: number;
}
