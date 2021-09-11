import React, { useRef } from 'react';
import MessagesList from './components/MessagesList';
import { Slide, SlideProps, Snackbar } from '@material-ui/core';
import { Alert } from './components/Alert';
import { snackbarActions, useShallowSelectSnackbar } from './data/slices/snackbarSlice';
import { useDispatch } from 'react-redux';
import { MessagesButtons } from './components/MessagesButtons';

// TODO: remove when fixed, workaround for material-ui warning
const SlideTransition = React.forwardRef<unknown, SlideProps>((props, ref) => (
  <Slide ref={ref} {...props} direction='left' />
));

const App: React.FC<{}> = () => {
  const {
    show: showSnack,
    autoClose,
    message,
  } = useShallowSelectSnackbar(['show', 'autoClose', 'message']);
  const dispatch = useDispatch();
  const close = () => dispatch(snackbarActions.toggle(false));
  const fixWarning = useRef(); // TODO: remove when fixed, workaround for material-ui warning

  return (
    <>
      <Snackbar
        ref={fixWarning}
        open={showSnack}
        autoHideDuration={autoClose}
        onClose={close}
        TransitionComponent={SlideTransition}
      >
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
