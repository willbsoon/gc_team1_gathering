export interface UserAuthDetail {
  authCancel: string;
  authCreate: string;
  authDelete: string;
  authOther: any;
  authRead: string;
  authUpdate: string;
  isUse: boolean;
  menu: 'RESERVATION' | 'SALES' | 'SETTING' | 'CUSTOMER' | 'CALL' | 'ACCOUNT' | 'LOGIN';
}
