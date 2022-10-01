import { CommonImageVo } from "./common-image-vo";
import { PetVo } from "./pet-vo";
import { ShopProfileVo } from "./shop-profile-vo";

export interface AlimPaperVo {

  shopId: string;
  images?: CommonImageVo[];
  pets: PetVo[];
  selectedInfo: { [key: string]: any }[];
  regDateTime: string;
  alimPaperVisitDateTime: string;
  shopProfile: ShopProfileVo;

  alimPaperRef: string; // 알림장 히스토리에서 해당 알림장으로 바로 가기 위한 ref 값.
  alimPaperTemplateName: string;
}
