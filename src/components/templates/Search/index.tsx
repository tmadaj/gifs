import { useEffect, useState } from 'react';

import useDebounceCallback from '../../../hooks/use-debounce-callback';
import { ISearchParams } from '../../../hooks/use-giphy-search';
import { IGiphyPagination, IGiphyResult } from '../../../types';
import { Layout } from '../../atoms/Layout/style';
import Pagination from '../../atoms/Pagination';
import SearchInput from '../../atoms/SearchInput';
import Results from '../../molecules/Results';

interface IProps {
  error?: boolean;
  initialLimit?: number;
  initialOffset?: number;
  initialQ?: string;
  loading?: boolean;
  pagination?: IGiphyPagination;
  results: IGiphyResult[];
  onSearch: (params: ISearchParams) => void;
}

const DEFAULT_PAGE_SIZE = 10;
const TYPING_DEBOUNCE_TIME = 300;

export default function SearchTemplate({
  initialLimit,
  initialOffset,
  initialQ,
  pagination,
  results,
  onSearch,
}: IProps) {
  const onSearchTermChangeDebounced = useDebounceCallback(onSearch, TYPING_DEBOUNCE_TIME);
  const [limit] = useState(initialLimit ?? DEFAULT_PAGE_SIZE);
  const [pageIndex, setPage] = useState((initialOffset ?? 0) / limit);
  const [searchTerm, setSearchTerm] = useState(initialQ ?? '');

  useEffect(() => {
    onSearchTermChangeDebounced({ limit, offset: pageIndex * limit, q: searchTerm });
  }, [limit, pageIndex, searchTerm, onSearchTermChangeDebounced]);

  return (
    <Layout>
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      {pagination && <Pagination pageSize={limit} pagination={pagination} onChange={setPage} />}
      {results && <Results results={results} />}
    </Layout>
  );
}
