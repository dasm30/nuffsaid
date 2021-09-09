import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MessageTable } from './MessageTable';
import { Messages } from '../customHooks/useMessages';

interface Props {
  messages: Messages;
}

const MessagesList: React.FC<Props> = ({ messages }) => (
  <Grid container spacing={3}>
    <Grid item xs>
      <MessageTable title='Error Type 1' messages={messages[0]} />
    </Grid>
    <Grid item xs>
      <MessageTable title='Warning Type 2' messages={messages[1]} />
    </Grid>
    <Grid item xs>
      <MessageTable title='Info Type 3' messages={messages[2]} />
    </Grid>
  </Grid>
);

export default MessagesList;
