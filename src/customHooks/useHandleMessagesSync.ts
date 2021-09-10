import { useDispatch } from 'react-redux';
import { messagesActions } from '../data/slices/messagesSlice';

export const useHandleMessagesSync = () => {
  const dispatch = useDispatch();
  const getHandleSync = (sync: boolean, clear?: boolean) => () => {
    dispatch(messagesActions.handleSync({ sync, clear }));
  };

  return getHandleSync;
};
