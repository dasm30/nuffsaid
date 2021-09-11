import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const SpacedGrid = styled((props) => (
  <Grid {...props} />
))`
  padding: ${props => Number.isInteger(props.padding) ? `${props.padding}px` : props.padding};
  margin: ${props => Number.isInteger(props.margin) ? `${props.margin}px` : props.margin};

`;
