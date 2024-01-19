import { TDetailActions } from './detail.actions';

import {
  DETAIL_ACTIONS, IDetailRedux, INIT_REDUX_FAVORITES
} from './detail.constants';

export const detailReducer = (
  state = INIT_REDUX_FAVORITES,
  action: TDetailActions
): IDetailRedux => {
  const { type, payload } = action;

  switch (type) {
    case DETAIL_ACTIONS.TOGGLE_FAVORITES:
      const index = state.favorites.indexOf(payload.symbol);

      return {
        favorites:
          index === -1
            ? [...state.favorites, payload.symbol]
            : [...state.favorites.filter((el) => el !== payload.symbol)],
      };
    default:
      return state ?? INIT_REDUX_FAVORITES;
  }
};
