import { ShopConfigDailyBusinessHours } from "./shop-config-daily-business-hours";

export interface ShopConfigBusinessHours {
  openingTime: string;
  closingTime: string;
  isLunchTime: boolean;
  lunchStartTime: string;
  lunchEndTime: string;
  isDailyBusinessHours: boolean;
  dailyBusinessHours: ShopConfigDailyBusinessHours[];
}
