import React from 'react';
import styled from 'styled-components';

export const SimpleP = styled(({ innerRef, ...rest }) => (
  <p ref={innerRef} {...rest}>
    {rest.children}
  </p>
))`
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
`;
