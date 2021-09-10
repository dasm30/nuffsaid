import React from 'react';
import { Button } from './styled/Button';
import { Grid } from '@material-ui/core';
import { CenteredGrid } from './styled/Centered';
import { useHandleMessagesSync } from '../customHooks/useHandleMessagesSync';

export const MessagesButtons: React.FC<{}> = () => {
  const getHandleSync = useHandleMessagesSync();

  return (
    <>
      <Grid container spacing={8}>
        <CenteredGrid item xs={12} margin='0 0 32px 0'>
          <Button size='small' variant='contained' margin={4} onClick={getHandleSync(false)}>
            Stop
          </Button>
          <Button size='small' variant='contained' margin={4} onClick={getHandleSync(true, true)}>
            Clear
          </Button>
        </CenteredGrid>
      </Grid>
    </>
  );
};
