export type Operation =
  'NOTHING' | // 아무 것도 하지 않음
  'NEW' | // 신규 생성
  'DELETE' | // 삭제
  'MODIFY' | // 변경
  'MODIFY_STATUS' // 상태만 변경
  ;
