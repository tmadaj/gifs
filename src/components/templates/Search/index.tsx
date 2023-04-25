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
  loading?: boolean;
  pagination?: IGiphyPagination;
  results: IGiphyResult[];
  onSearch: (params: ISearchParams) => void;
}

const TYPING_DEBOUNCE_TIME = 300;
const PAGE_SIZE = 10;

export default function SearchTemplate({ pagination, results, onSearch }: IProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageIndex, setPage] = useState(0);
  const onSearchTermChangeDebounced = useDebounceCallback(onSearch, TYPING_DEBOUNCE_TIME);

  useEffect(() => {
    onSearchTermChangeDebounced({ limit: PAGE_SIZE, offset: pageIndex * PAGE_SIZE, q: searchTerm });
  }, [pageIndex, searchTerm, onSearchTermChangeDebounced]);

  return (
    <Layout>
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      {pagination && <Pagination pageSize={PAGE_SIZE} pagination={pagination} onChange={setPage} />}
      {results && <Results results={results} />}
    </Layout>
  );
}
