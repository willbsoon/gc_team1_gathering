import {TeepeeUserVo} from "./teepee-user-vo";

export interface LoginResultVo {
  user: TeepeeUserVo;
  jwt: string;
}
