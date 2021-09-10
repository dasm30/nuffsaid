import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { remove } from 'lodash';
import { useSelector, shallowEqual } from 'react-redux';
import { Message, Priority } from '../../Api';
import { getSelectField, StringOrArray } from '../utils';

export interface Messages {
  [Priority.Error]: Message[];
  [Priority.Warn]: Message[];
  [Priority.Info]: Message[];
}

type MessagesState = {
  messages: Messages;
  sync: boolean;
};

const initialState: MessagesState = {
  messages: { [Priority.Error]: [], [Priority.Warn]: [], [Priority.Info]: [] },
  sync: true,
};

const name = 'messages';

const clearAll = (state: MessagesState) => {
  state.messages = initialState.messages;
}

export const messagesSlice = createSlice({
  name,
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Messages>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.messages = action.payload;
    },
    clearAll,
    add: (state, action: PayloadAction<Message>) => {
      state.messages[action.payload.priority].unshift(action.payload);
    },
    remove: (state, action: PayloadAction<Message>) => {
      remove(state.messages[action.payload.priority], action.payload);
    },
    handleSync: (state, action: PayloadAction<{sync: boolean, clear?: boolean}>) => {
      state.sync = action.payload.sync;
      if (action.payload.clear) clearAll(state);
    },
  },
});

export const selectField = getSelectField(name);

export const useSelectMessages = (fieldName: StringOrArray, defaultValue?: StringOrArray) =>
  useSelector(selectField(fieldName, defaultValue));
export const useShallowSelectMessages = (fieldName: StringOrArray, defaultValue?: StringOrArray) =>
  useSelector(selectField(fieldName, defaultValue), shallowEqual);

// Action creators are generated for each case reducer function
export const messagesActions = messagesSlice.actions;

export default messagesSlice.reducer;
