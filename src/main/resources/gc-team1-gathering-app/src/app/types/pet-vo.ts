import { GeneralState } from "./general-state";
import { PetType } from "./pet-type";
import { Sex } from "./sex";

export interface PetVo {
  petSeq: number;
  state: GeneralState;

  familySeq: number;

  petType: PetType;
  petName: string;

  shopBreedSeq: number;
  shopBreedName: string
  commonBreedName: string; // 공통 품종명

  sex: Sex;
  isNeutral: boolean;
  registerNumber: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;

  memo?: string;
  petWeight: string;
  petWeightDateTime: string;

  profileUrl: string;

  // 필수 정보가 모두 입력되어 있는지 여부
  isShopRequiredFieldFilled: boolean;
}
