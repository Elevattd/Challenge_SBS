import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productsReducer from "../features/slices/productsSlice";
import uiReducer from "../features/slices/uiSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    ui: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
