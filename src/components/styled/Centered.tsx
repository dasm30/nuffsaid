import styled from 'styled-components';
import { SpacedGrid } from './Spacing';

export const CenteredGrid = styled((props) => (
  <SpacedGrid {...props} />
))`
  text-align: center;
`;
