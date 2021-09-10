import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector, shallowEqual } from 'react-redux';
import { getSelectField, StringOrArray, timeout } from '../utils';
import { messagesActions } from './messagesSlice';

export interface SnackbarState {
  show: boolean;
  autoClose: number;
  message: string;
}

const initialState: SnackbarState = {
  show: false,
  autoClose: 2000,
  message: '',
};

const name = 'snackbar';

const close = createAsyncThunk(
  `${name}/close`,
  async (_, { getState }) => {
    const { autoClose } = getState() as SnackbarState;
    await timeout(autoClose);
  }
)

export const snackbarSlice = createSlice({
  name,
  initialState,
  reducers: {
    toggle: (state, action?: PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.show = action?.payload !== undefined ? action.payload : !state.show;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(close.fulfilled, (state, action) => {
      state.show = false;
    })
    .addCase(messagesActions.add, (state, action) => {
      state.message = action.payload.message;
    })
  },
});

export const selectField = getSelectField(name);

export const useSelectSnackbar = (fieldName: StringOrArray, defaultValue?: StringOrArray) =>
  useSelector(selectField(fieldName, defaultValue));
export const useShallowSelectSnackbar = (fieldName: StringOrArray, defaultValue?: StringOrArray) =>
  useSelector(selectField(fieldName, defaultValue), shallowEqual);

// Action creators are generated for each case reducer function
export const snackbarActions = snackbarSlice.actions;

export default snackbarSlice.reducer;
