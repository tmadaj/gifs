import { useCallback, useState } from 'react';

import { IGiphyResult, IGiphyPagination } from '../types';

export interface ISearchParams {
  q: string;
  offset?: number;
  limit?: number;
}

const URL = 'api.giphy.com/v1/gifs/search';

export default function useGiphySearch() {
  const [data, setData] = useState<IGiphyResult[]>([]);
  const [pagination, setPagination] = useState<IGiphyPagination>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const search = useCallback(async ({ q, limit = 10, offset = 0 }: ISearchParams) => {
    setError(undefined);
    setLoading(true);
    try {
      const response = await fetch(
        `https://${URL}?api_key=${process.env.GIPHY_API_KEY}&q=${q}&limit=${limit}&offset=${offset}`
      );
      const { data, pagination } = await response.json();

      setData(data);
      setPagination(pagination);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, pagination, loading, error, search };
}
