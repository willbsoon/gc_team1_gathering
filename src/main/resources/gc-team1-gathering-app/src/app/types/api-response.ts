import {ApiError} from "./api-error";

export interface ApiResponse<T> extends ApiError {
  data: T;
}
