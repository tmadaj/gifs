import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0;
`;

export const Page = styled.a<{ isCurrent?: boolean }>`
  pointer-events: ${({ isCurrent }) => (isCurrent ? 'none' : 'auto')};
  text-decoration: ${({ isCurrent }) => (isCurrent ? 'none' : 'auto')};
  font-weight: ${({ isCurrent }) => (isCurrent ? 'bold' : 'normal')};

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
