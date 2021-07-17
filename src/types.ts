import { ThunkAction } from 'redux-thunk';
import { RootState } from './redux/rootReducer';
import { Action } from 'redux';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppThunkWithPromise<ReturnType = Promise<any>> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
