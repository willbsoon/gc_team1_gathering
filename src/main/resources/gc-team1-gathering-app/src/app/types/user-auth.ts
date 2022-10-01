import { UserAuthDetail } from "./user-auth-detail";

export interface UserAuth {
  shopId: string;
  status: string;
  userAuthDetails: UserAuthDetail[];
  userAuthSeq: number;
  userId: string;
  userSeq: number;
}
