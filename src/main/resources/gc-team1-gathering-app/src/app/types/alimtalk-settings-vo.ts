import { GeneralState } from "./general-state";
import { AlimtalkSettingsTemplateCode } from "./alimtalk-settings-template-code";
import { AlimtalkSettingsKakaoTemplateCode } from "./alimtalk-settings-kakao-template-code";
import { ChronoUnit } from "./chrono-unit";
import { AlimtalkSettingsJson } from "./alimtalk-settings-json";

export interface AlimtalkSettingsVo {

  templateSeq: number;
  shopId: string;
  templateCode: AlimtalkSettingsTemplateCode;
  kakaoTemplateCode: AlimtalkSettingsKakaoTemplateCode;
  sendBeforeKind: ChronoUnit;
  sendTime: string;
  sendBeforeValue: number;
  setting: AlimtalkSettingsJson;
  state: GeneralState;
  isForceToSend: boolean; // 수신 거부 고객 강제 발송 여부
}
