export interface AlimtalkSettingsJson {
  guide: string;              // 수정한 안내문구
  reservationState: string;   // 예약상태?
  parentName: boolean;      //
  petName: boolean;         // 펫 이름 사용여부?
  serviceKind: boolean;     // 서비스 종류 사용 여부
  serviceManager: boolean;   // 서비스 담당자 여부
  serviceItem: boolean;     // 서비스 아이템 여부
  shopPhoneNumber: boolean; // 매장 번호 노출 여부

  useDefaultGuide: boolean;   // 기본 가이드 문구 사용
  useDefaultExposure: boolean;    // 기본 노출정보 사용
  useFilterService: boolean;    // 필터서비스 사용???
  alimtalkService: number[];
  optionalName: string;    // 선택발송 템플릿 이름
  optionalUse: boolean; // 선택발송 사용여부
}
