import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState = {
  count: 0,
};

const slice = createSlice({
  name: 'widgetA',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export const { increment } = slice.actions;
export const requestIncrement = createAction<number>('request-increment');

export const { reducer } = slice;

// export const useGithubRepoFormSlice = () => {
//   useInjectReducer({ key: slice.name, reducer: slice.reducer });
//   useInjectSaga({ key: slice.name, saga: githubRepoFormSaga });
//   return { actions: slice.actions };
// };
