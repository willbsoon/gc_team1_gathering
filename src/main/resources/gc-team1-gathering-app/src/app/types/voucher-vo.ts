export interface VoucherVo {
  expiresDateTime: string | null;
  familySeq: number;
  remainAmount: number;
  remainCount: number;
  remainMinutes: number;
  savedAmount: number;
  savedCount: number;
  savedMinutes: number;
  shopId: string;
  voucherSeq: number;
  voucherTemplateSeq: number;
}
