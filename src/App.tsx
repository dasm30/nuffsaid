import React, { useState } from 'react';
import MessagesList from './components/MessagesList';
import { useMessages } from './customHooks/useMessages';
import Button from './components/styled/Button';
import { Grid, Snackbar } from '@material-ui/core';
import { CenteredGrid } from './components/styled/Centered';
import { Alert } from './components/Alert';
import { useCallback } from 'react';

const autoClose = 2000;

const App: React.FC<{}> = () => {
  const [showError, setShowError] = useState(false);
  const close = useCallback(() => setShowError(false), []);
  const { messages, getHandleSync } = useMessages(() => {
    setShowError(true);
    setTimeout(close, autoClose);
  });

  return (
    <>
      <Snackbar open={showError} autoHideDuration={autoClose} onClose={close}>
        <Alert onClose={close} severity='error'>
          {messages?.[0]?.[0]?.message}
        </Alert>
      </Snackbar>
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
      <MessagesList messages={messages} />
    </>
  );
};

export default App;
