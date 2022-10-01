/**
 * 매장 서비스(미용, 호텔 등)의 설정
 */
export interface ShopServiceConfig {
  /**
   * 예약 날짜가 단일 날짜인가 여러 날짜에 걸쳐있는가
   */
  isReservationDateRange: boolean;
}
