import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const CenteredGrid = styled((props) => (
  <Grid {...props} />
))`
  text-align: center;
  padding: ${props => Number.isInteger(props.padding) ? `${props.padding}px` : props.padding};
  margin: ${props => Number.isInteger(props.margin) ? `${props.margin}px` : props.margin};

`;
