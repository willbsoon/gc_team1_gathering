export interface AgreementMaster {
  agreeCode: string;

  /**
   * 동의사항 제목
   */
  title: string;

  /**
   * 동의사항 내용
   */
  content: string;

  /**
   * 필수 약관
   */
  isRequired: boolean;

  /**
   * 정렬 순서
   */
  ordering: number;
}
