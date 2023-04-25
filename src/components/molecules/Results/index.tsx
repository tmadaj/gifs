import { IGiphyResult } from '../../../types';
import Result from '../../atoms/Result';

import { Grid } from './style';

interface IProps {
  results: IGiphyResult[];
}

export default function Results({ results }: IProps) {
  return (
    <Grid>
      {results.map((result) => (
        <Result key={result.id} result={result} />
      ))}
    </Grid>
  );
}
