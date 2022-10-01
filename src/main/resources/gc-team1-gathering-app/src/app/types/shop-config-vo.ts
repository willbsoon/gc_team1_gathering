import { ShopConfigBusinessHours } from "./shop-config-business-hours";
import { ConsentTemplateVo } from "./consent-template-vo";
import { ShopServiceVo } from "./shop-service-vo";

export interface ShopConfigVo {
  shopId: string;

  isSendReservationAlimTalk: boolean;
  reservationAlimTalkType: "DEFAULT" | " PET_INFO";
  reservationAlimTalkServices: number[];

  isSendReservationAlimTalkOneDayBefore: boolean;
  reservationAlimTalkOneDayBeforeServices: number[];
  reservationAlimTalkOneDayBeforeSendPointDay: number;
  reservationAlimTalkOneDayBeforeSendPointHour: string;

  isSendChangedReservationAlimTalk: boolean;
  changedReservationAlimTalkServices: number[];

  isSendReservationAlimTalkAtHand: boolean;
  reservationAlimTalkAtHandServices: string;

  isSendCanceledReservationAlimTalk: boolean;
  canceledReservationAlimTalkServices: number[];

  isSendComeToFinishServiceStatusAlimTalk: boolean;
  comeToFinishServiceStatusAlimTalkPointMinute: number;
  comeToFinishServiceStatusAlimTalkServices: number[];

  reservationAlimTalkText: string;
  isSendAlarmPaper: boolean;
  isSendRequestConsent: boolean;

  // -----------------------------------------------------------------
  isUsingArrivalTimer: boolean;

  // -----------------------------------------------------------------
  isUsingPrepaidVoucher: boolean;
  isUsingCommutationVoucher: boolean;
  isUsingTimeVoucher: boolean;
  isOnPrepaidVoucherAlimtalk: boolean;
  isOnCommutationVoucherAlimtalk: boolean;
  isOnTimeVoucherAlimtalk: boolean;

  // -----------------------------------------------------------------
  isShowCancelNoshowReservation: boolean;

  // -----------------------------------------------------------------
  urlShopInfo: string;
  urlOneOnOneQuestion: string;

  averageTimePerReservation: number;
  reservationInterval: number;
  businessHours: ShopConfigBusinessHours;

  shopServices: ShopServiceVo[]

  consentTemplates: ConsentTemplateVo[];
}
