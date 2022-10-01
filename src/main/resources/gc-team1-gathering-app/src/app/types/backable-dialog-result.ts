export interface BackableDialogResult<T> {
  /**
   * 사용자가 yes, no 버튼을 직접 클릭했는지에 대한 여부
   * - 직접 클릭했다면 true
   * - 뒤로 가기 버튼을 누르거나, 어떤 예외적인 경우에 창이 닫힌 경우라면 false
   */
  buttonClicked: boolean;

  /**
   * 사용자가 클릭한 경우 yes 버튼을 클릭했는지에 대한 여부
   * - 사용자가 yes 를 클릭한 경우에만 true
   * - 그 외 취소, 닫기 및 뒤로 가기 등은 false
   */
  confirmed: boolean;

  data?: T
}
