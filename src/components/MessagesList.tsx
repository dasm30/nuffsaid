import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MessageTable } from './MessageTable';
import { Priority } from '../Api';
import { useMessages } from '../customHooks/useMessages';
import { SpacedGrid } from './styled/Spacing';

const MessagesList: React.FC = () => {
  useMessages();
  return (
    <Grid container>
      <SpacedGrid item xs padding="12px 4px 0 12px">
        <MessageTable title="Error Type 1" priority={Priority.Error} />
      </SpacedGrid>
      <SpacedGrid item xs padding="12px 4px 0 4px">
        <MessageTable title="Warning Type 2" priority={Priority.Warn} />
      </SpacedGrid>
      <SpacedGrid item xs padding="12px 12px 0 4px">
        <MessageTable title="Info Type 3" priority={Priority.Info} />
      </SpacedGrid>
    </Grid>
  );
}

export default MessagesList;
