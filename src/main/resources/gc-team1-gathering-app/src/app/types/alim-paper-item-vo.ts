import { AlimPaperItemType } from "./alim-paper-item-type";

export interface AlimPaperItemVo {
  alimPaperItemSeq: number;
  alimPaperTemplateSeq: number;
  itemName: string;
  itemOptions: string[];
  itemType: AlimPaperItemType; // 단일항목,복수항목,목록형,서술형
  hasEtc: boolean;
  ordering: number;
  regDateTime: string;
  modDateTime: string;
}
