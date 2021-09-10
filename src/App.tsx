import React from 'react';
import MessagesList from './components/MessagesList';
import { Snackbar } from '@material-ui/core';
import { Alert } from './components/Alert';
import { snackbarActions, useShallowSelectSnackbar } from './data/slices/snackbarSlice';
import { useDispatch } from 'react-redux';
import { MessagesButtons } from './components/MessagesButtons';

const App: React.FC<{}> = () => {
  const {
    show: showSnack,
    autoClose,
    message,
  } = useShallowSelectSnackbar(['show', 'autoClose', 'message']);
  const dispatch = useDispatch();
  const close = () => dispatch(snackbarActions.toggle(false));

  return (
    <>
      <Snackbar open={showSnack} autoHideDuration={autoClose} onClose={close}>
        <Alert onClose={close} severity='error'>
          {message}
        </Alert>
      </Snackbar>
      <MessagesButtons />
      <MessagesList />
    </>
  );
};

export default App;
