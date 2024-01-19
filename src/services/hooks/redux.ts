import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { IReduxStore } from '@services/redux';

export const useReduxSelector: TypedUseSelectorHook<IReduxStore> = useSelector;

export const useAction = <T extends (...args: any[]) => any>(action: T) => {
  const dispatch = useDispatch();
  return (...args: Parameters<T>) => {
    dispatch(action(...args));
  };
};
