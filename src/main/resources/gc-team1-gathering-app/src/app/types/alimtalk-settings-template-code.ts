export type AlimtalkSettingsTemplateCode =
  'DEFAULT' |        // 알림톡 기본
  'CONSENT' |        // 동의서 알림톡
  'RESERVATION' |    // 예약 접수 안내
  'ADVANCE' |        // 예약 사전 안내
  'CHANGE' |        // 예약 변경 안내
  'CANCELLATION' |   // 예약 취소 안내
  'CLOSING' |        // 예약 마무리 안내
  'NOSHOW' |         // 노쇼 안내
  'OPTIONAL' |       // 선택 발송
  'NONE' |         // 없음...

  // 예약금 관련
  'DEPOSIT_REQUEST' |            // 요청(재요청)
  'DEPOSIT_REQUEST_CANCEL' |     // 요청 취소
  'DEPOSIT_EXPECTED_EXPIRATION' | // 결제 기한 만료 예정
  'DEPOSIT_EXPIRATION' |         // 결제 기한 만료
  'DEPOSIT_COMPLETED' |         // 결제 완료
  'DEPOSIT_REFUND' |             // 환불(전체, 부분)

  'VOUCHER_USE' |                // 이용권 사용
  'VOUCHER_CHARGE' |             // 이용권 충전
  'ALIMPAPER'                  // 알림장
  ;
