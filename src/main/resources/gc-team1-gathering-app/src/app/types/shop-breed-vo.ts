import { PetType } from "./pet-type";

export interface ShopBreedVo {
  shopBreedSeq: number;
  petType: PetType;
  name: string;
  nameEn: string;
  ordering: number;
  isFavorite: boolean;
}
