import { useEffect, useState } from 'react';
import generateMessage, { Message, Priority } from '../Api';

export type Messages = {
  [Priority.Error]: Message[];
  [Priority.Warn]: Message[];
  [Priority.Info]: Message[];
};

export const useMessages = (handleNewError: Function) => {
  const [messages, setMessages] = useState<Messages>({ 0: [], 1: [], 2: [] });
  const [sync, setSync] = useState(true);
  const getHandleSync = (sync: boolean, clear?: boolean) => () => {
    setSync(sync);
    if (clear) {
      setMessages({
        [Priority.Error]: [],
        [Priority.Warn]: [],
        [Priority.Info]: [],
      });
    }
  };

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      if (sync) {
        setMessages((oldMessages) => {
          const newMessages: Message[] = [message, ...oldMessages[message.priority]];
          if (handleNewError && message.priority === Priority.Error) handleNewError();
          return { ...oldMessages, [message.priority]: newMessages };
        });
      }
    });
    return cleanUp;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setMessages, sync]);

  return { messages, getHandleSync };
};
