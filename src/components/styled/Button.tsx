import styled from 'styled-components';
import { default as Bt } from '@material-ui/core/Button';

export const Button = styled(({ color, ...otherProps }) => <Bt {...otherProps} />)`
  background-color: ${(props) => props.color || '#88FCA3'};
  font-weight: bold;
  padding: ${(props) => (Number.isInteger(props.padding) ? `${props.padding}px` : props.padding)};
  margin: ${(props) => (Number.isInteger(props.margin) ? `${props.margin}px` : props.margin)};
`;
