import React from 'react';
import { Button } from './styled/Button';
import { Grid } from '@material-ui/core';
import { CenteredGrid } from './styled/Centered';
import { useHandleMessagesSync } from '../customHooks/useHandleMessagesSync';
import { useElementHeight } from '../customHooks/useElementHeight';

export const messagesButtonsHeightKey = 'messagesButtons';

export const MessagesButtons: React.FC<{}> = () => {
  const getHandleSync = useHandleMessagesSync();
  const vMargin = 32;
  const { ref: gridRef } = useElementHeight(messagesButtonsHeightKey, vMargin);

  return (
    <CenteredGrid innerRef={gridRef} container margin={`0 0 ${vMargin}px 0`}>
      <Grid item xs={12}>
        <Button size='small' variant='contained' margin={4} onClick={getHandleSync(false)}>
          Stop
        </Button>
        <Button size='small' variant='contained' margin={4} onClick={getHandleSync(true, true)}>
          Clear
        </Button>
      </Grid>
    </CenteredGrid>
  );
};
