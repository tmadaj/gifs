import { IGiphyPagination } from '../../../types';

import { Container, Page } from './style';

interface IProps {
  pageSize: number;
  pagination: IGiphyPagination;
  onChange: (pageIndex: number) => void;
}

const RANGE = 5;

export default function Pagination({ pageSize, pagination, onChange }: IProps) {
  const { offset, total_count } = pagination;
  const totalPages = Math.ceil(total_count / pageSize);
  const currentPage = Math.ceil(offset / pageSize) + 1;

  if (!totalPages) return null;

  return (
    <Container>
      {Array(totalPages)
        .fill(null)
        .map((_, index) => {
          const pageNumber = index + 1;
          const isCurrentPage = pageNumber === currentPage;

          if (
            pageNumber === 1 ||
            (currentPage - RANGE < pageNumber && pageNumber < currentPage + RANGE) ||
            pageNumber === totalPages
          ) {
            return (
              <Page isCurrent={isCurrentPage} href="#" key={index} onClick={() => onChange(index)}>
                {pageNumber}
              </Page>
            );
          }

          if (pageNumber === currentPage - RANGE || pageNumber === currentPage + RANGE) {
            return <Page key={index}>...</Page>;
          }
        })}
    </Container>
  );
}
