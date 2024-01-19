export const DETAIL_ACTIONS = <const>{
  TOGGLE_FAVORITES: '@DETAIL/TOGGLE_FAVORITES',
};

export interface IDetailRedux {
  favorites: string[];
}

export interface IToggleFavoritesPayload {
  symbol: string;
}

export const INIT_REDUX_FAVORITES: IDetailRedux = {
  favorites: [],
};
