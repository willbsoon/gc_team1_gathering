export type DepositStatus =
  "REQUEST" |
  "RE_REQUEST" |
  "REQUEST_CONFIRMATION" |
  "REQUEST_CANCEL" |
  "EXPIRATION" |
  "COMPLETED" |
  "REFUND" |
  "SETTLE_REQUEST" |
  "SETTLE_COMPLETED" |
  "NONE" |

  "FINAL"  // 수정 불가능한 최종 상태(REQUEST_CANCEL, EXPIRATION, COMPLETED, REFUND)
