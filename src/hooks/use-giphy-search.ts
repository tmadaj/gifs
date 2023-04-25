import { useCallback, useState } from 'react';

import { IGiphyResult, IGiphyPagination } from '../types';

export interface ISearchParams {
  limit?: number;
  offset?: number;
  q: string;
}

const URL = 'api.giphy.com/v1/gifs/search';

export default function useGiphySearch() {
  const [data, setData] = useState<IGiphyResult[]>([]);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<IGiphyPagination>();

  const search = useCallback(async ({ limit = 10, offset = 0, q }: ISearchParams) => {
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
