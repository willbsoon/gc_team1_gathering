export interface AppConfigVo {
  /**
   * 클라이언트에서 RSA 암호화를 할 때 사용하는 암호화 키
   */
  commonPublicKey: string;

  /**
   * 클라이언트에서 이미지 업로드 하는 URL
   */
  imageUploadUrl: string;

  /**
   * 클라이언트에서 접속할 WebSocket 게이트웨이 URL. (차후 클라이언트 shopId마다 달라질 여지가 있다)
   */
  wsGatewayUrl: string;
}
