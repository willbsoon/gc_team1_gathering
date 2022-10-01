export interface SearchReservationCustomerParam{
  page: number;
  pageSize: number;
  searchFields: string[];
  searchKeyword?: string;
  shopId: string;
}
