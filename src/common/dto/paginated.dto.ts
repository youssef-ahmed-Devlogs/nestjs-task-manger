export class PaginatedDto<TData> {
  results: TData[];
  page: number;
  limit: number;
  total: number;
}
