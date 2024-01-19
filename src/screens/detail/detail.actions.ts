import { action } from '@services/utils';

import { DETAIL_ACTIONS, IToggleFavoritesPayload } from './detail.constants';

import { TActionCombiner } from '@typings/redux';

export const detailActions = {
  toggleFavorites: (payload: IToggleFavoritesPayload) =>
    action(DETAIL_ACTIONS.TOGGLE_FAVORITES, payload),
};

export type TDetailActions = ReturnType<TActionCombiner<typeof detailActions>>;
