import styled from 'styled-components';

export const SimpleH2 = styled.h2<{ padding?: string | number; margin?: string | number }>`
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
`;
