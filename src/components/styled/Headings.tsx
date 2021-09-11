import styled from 'styled-components';

export const SimpleH2 = styled(({ innerRef, ...rest }) => (
  <h2 ref={innerRef} {...rest}>
    {rest.children}
  </h2>
))`
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
`;
