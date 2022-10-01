import { AlimtalkSettingsTemplateCode } from "./alimtalk-settings-template-code";
import { PhoneNumber } from "./phone-number";

export interface AlimtalkHistoryVo {
  alimtalkHistorySeq: number;   //시퀀스
  shopId: string; //샵 id
  customerSeq: number;  //
  reservationSeq: number; //고객 시퀀스
  templateCode: AlimtalkSettingsTemplateCode; //
  alimtalkTemplateSeq: number;  //예약 시퀀스
  kakaoTemplateCode: string;  //알림톡 템플릿
  recipientNo: PhoneNumber; //알림톡 템플릿 시퀀스
  content: string;  //알림톡 카카오 템플릿 코드
  parameter: string;  //수신 전화 번호
  resultCode: number; //내용
  resultMessage: string;  //전송 parameter
  sendResultCode: string; //전송 결과 코드(0 성공 - sendResultCode 도 확인해야함., 나머지 실패)
  sendResultMessage: string;  //전송 결과 메시지
  resendStatus: string; //발송 조회 결과 코드(0000 성공 , 나머지 실패)
  resendStatusName: string; //발송 조회 결과 메시지
  resendResultCode: string; //대체 발송 상태 코드 (RSC01 대체 발송 미대상, RSC02 대체 발송 대상, RSC03 대체 발송 중, RSC04 대체 발송 성공, RSC05 대체 발송 실패)
  regDateTime: string;  //대체 발송 상태
  modDateTime: string;  //대체 발송 결과 코드(0코드명' 성공 이외 실패)
}
