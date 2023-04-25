import { IGiphyResult } from '../../../types';

import { Cell, Gif } from './style';

interface IProps {
  result: IGiphyResult;
}

export default function Result({ result }: IProps) {
  return (
    <Cell>
      <Gif alt={result.alt_text} src={result.images.original.url} />
    </Cell>
  );
}
