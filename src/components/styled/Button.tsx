import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default styled(({ color, ...otherProps }) => (
  <Button {...otherProps} />
))`
  background-color: ${props => props.color || '#88FCA3'};
  font-weight: bold;
  padding: ${props => Number.isInteger(props.padding) ? `${props.padding}px` : props.padding};
  margin: ${props => Number.isInteger(props.margin) ? `${props.margin}px` : props.margin};
`;
