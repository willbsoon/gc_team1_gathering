/**
 * 검색 요청 Parameter
 */
import { SearchFieldItem } from "./search-field-item";

export interface GeneralSearchParam {
  shopId: string;
  searchKeyword: string;
  searchFields?: SearchFieldItem[];
  page: number;
  pageSize?: number;
}

