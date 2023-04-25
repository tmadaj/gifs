import { useCallback } from 'react';

import SearchTemplate from '../components/templates/Search';
import useGiphySearch, { ISearchParams } from '../hooks/use-giphy-search';

function writeSearchParams({ limit = 0, offset = 0, q }: ISearchParams) {
  const params = new URLSearchParams();

  params.set('limit', limit.toString());
  params.set('offset', offset.toString());
  params.set('q', q);

  const path = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

  window.history.pushState({ path }, '', path);
}

export default function SearchPage() {
  const params = new URLSearchParams(window.location.search);
  const initialLimit = parseInt(params.get('limit') ?? '0', 10);
  const initialOffset = parseInt(params.get('offset') ?? '0', 10);
  const initialQ = params.get('q') ?? '';

  const { data, loading, pagination, search } = useGiphySearch();

  const handleSearch = useCallback(
    (args: ISearchParams) => {
      search(args);
      writeSearchParams(args);
    },
    [search]
  );

  return (
    <SearchTemplate
      initialLimit={initialLimit}
      initialOffset={initialOffset}
      initialQ={initialQ}
      loading={loading}
      pagination={pagination}
      results={data}
      onSearch={handleSearch}
    />
  );
}
