import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import generateMessage, { Message, Priority } from '../Api';
import { messagesActions, useSelectMessages } from '../data/slices/messagesSlice';
import { snackbarActions } from '../data/slices/snackbarSlice';

/**
 * handles the api call to get new messages
 */
export const useMessages = () => {
  const dispatch = useDispatch();
  const sync = useSelectMessages('sync');

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      if (sync) {
        dispatch(messagesActions.add(message));
        if (message.priority === Priority.Error) dispatch(snackbarActions.toggle(true));
      }
    });
    return cleanUp;
  }, [dispatch, sync]);
};
