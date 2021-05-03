import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState = {
  value: 1,
};

const slice = createSlice({
  name: 'widgetB',
  initialState,
  reducers: {
    multiply(state, action: PayloadAction<number>) {
      state.value *= action.payload;
    },
  },
});

export const { multiply } = slice.actions;
export const requestMultiply = createAction<number>('request-multiply');

export const { reducer } = slice;

// export const useGithubRepoFormSlice = () => {
//   useInjectReducer({ key: slice.name, reducer: slice.reducer });
//   useInjectSaga({ key: slice.name, saga: githubRepoFormSaga });
//   return { actions: slice.actions };
// };
