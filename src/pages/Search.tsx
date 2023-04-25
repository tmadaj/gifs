import SearchTemplate from '../components/templates/Search';
import useGiphySearch from '../hooks/use-giphy-search';

export default function SearchPage() {
  const { data, loading, pagination, search } = useGiphySearch();

  return <SearchTemplate loading={loading} pagination={pagination} results={data} onSearch={search} />;
}
