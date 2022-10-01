export interface ShopConfigDailyBusinessHours {
  dayOfWeek: number;       // 월 1 ~ 일 7
  settingKind: string;  // 설정 종류 - DEFAULT(샵 기본 설정), DAY_OFF(휴무), DAILY(직접설정)
  openingTime: string;
  closingTime: string;
  lunchKind: string;    // 점심 설정 종류 - DEFAULT(샵 기본 설정), NONE(없음), DAILY(직접설정)
  lunchStartTime: string;
  lunchEndTime: string;
}
