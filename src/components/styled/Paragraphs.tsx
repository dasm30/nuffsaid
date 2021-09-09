import styled from 'styled-components';

export const SimpleP = styled.p<{ padding?: string | number; margin?: string | number }>`
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
`;
