export interface PhoneNumber {
  /**
   * 저장소에 저장되어 있는 형태: regionCode_number 형식이다. 예) KR_821012345678
   */
  rawNumber: string;

  /**
   * 지역 코드. 예) KR, US, CN ...
   */
  regionCode: string;

  /**
   * 국가 코드를 포함한 전체 전화번호. 예) 821012345678
   */
  number: string;

  /**
   * 숫자만 있는 국제 전화번호 형식을 얻는다. 의) 821012345678
   */
  e164Number: string;

  /**
   * 형식화된 전화번호. 예) 010-1234-5678
   */
  displayNumber: string;

  /**
   * 형식화된 전화번호(국제형식) 예) +82 10-1234-5678
   */
  displayInternational: string;

  valid: boolean;
}
