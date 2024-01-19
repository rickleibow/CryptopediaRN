export type TCurrency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD' | 'BRL';

export enum API {
  pro = 'https://pro-api.coinmarketcap.com/',
  min = 'https://min-api.cryptocompare.com/data',
  defi = 'https://data-api.defipulse.com/api/v1',
}

export interface INewData {
  id: string;
  url: string;
  title: string;
  imageurl: string;
  body: string;
  source_info: {
    name: string;
  };
}

interface IQuoteData {
  price: number;
  percent_change_24h: number;
  market_cap: number;
  volume_24h: number;
}

export interface ICoinData {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD?: IQuoteData;
    EUR?: IQuoteData;
    GBP?: IQuoteData;
    JPY?: IQuoteData;
    AUD?: IQuoteData;
    CAD?: IQuoteData;
    BRL?: IQuoteData;
  };
}

interface ISnapshotData {
  time: number;
  high: number;
}

export interface ICoinListData {
  ImageUrl: string;
}

interface IGetNewsReturn {
  Data: INewData[];
}

interface IGetCoinsReturn {
  data: ICoinData[];
}

interface IGetCoinListReturn {
  Data: {
    [key: string]: ICoinListData;
  };
  BaseImageUrl: string;
}

interface IGetSnapshotReturn {
  Data: ISnapshotData[];
}

export interface IGetDefiHistoryReturn {
  timestamp: number;
  tvlUSD: number;
}

interface IGetNewsParameters {
  categories?: string;
}

interface IGetCoinsParameters {
  limit?: number;
  start?: number;
  convert?: TCurrency;
}

interface IGetSnapshotParameters {
  fsym: string;
  tsym: string;
  limit?: number;
}

interface IGetDefiHistoryParams {
  'api-key': string;
  period: '1w' | '1m' | '3m' | '1y' | 'all';
}

interface IGetDefiRatesPoolsParams {
  'api-key': string;
}

interface IDefiPool {
  assets: {
    symbol: string;
  }[];
  poolName: string;
  roi: number;
}

interface IGetDefiPoolsReturns {
  results: IDefiPool[]
}

interface IDefiRatesReturn {
  relative_1d: number;
  chain: TDefiChain;
  name: string;
}

export enum MethodsEndpoints {
  get_news = 'v2/news/?lang=EN',
  get_coins = 'v1/cryptocurrency/listings/latest',
  get_coin_list = 'all/coinlist',
  get_snapshot_hour = 'histohour',
  get_snapshot_minute = 'histominute',
  get_snapshot_day = 'histoday',
  get_defi_history = 'defipulse/api/GetHistory',
  get_defi_pools = 'blocklytics/pools/v1/exchanges',
  get_defi_rates = 'defipulse/api/GetProjects',
}

export interface IMethodsParameters {
  get_news: IGetNewsParameters;
  get_coins: IGetCoinsParameters;
  get_coin_list: {};
  get_snapshot_hour: IGetSnapshotParameters;
  get_snapshot_minute: IGetSnapshotParameters;
  get_snapshot_day: IGetSnapshotParameters;
  get_defi_history: IGetDefiHistoryParams;
  get_defi_pools: IGetDefiRatesPoolsParams;
  get_defi_rates: IGetDefiRatesPoolsParams;
}

export interface IMethodsReturn {
  get_news: IGetNewsReturn;
  get_coins: IGetCoinsReturn;
  get_coin_list: IGetCoinListReturn;
  get_snapshot_hour: IGetSnapshotReturn;
  get_snapshot_minute: IGetSnapshotReturn;
  get_snapshot_day: IGetSnapshotReturn;
  get_defi_history: IGetDefiHistoryReturn[];
  get_defi_pools: IGetDefiPoolsReturns;
  get_defi_rates: IDefiRatesReturn[];
}

export interface IMethodsHeaders {
  get_news: {};
  get_coins: {
    'X-CMC_PRO_API_KEY': string;
  };
  get_coin_list: {};
  get_snapshot_hour: {};
  get_snapshot_minute: {};
  get_snapshot_day: {};
  get_defi_history: {};
  get_defi_pools: {};
  get_defi_rates: {}
}

export type TSnapshotStep = 'day' | 'hour' | 'minute';
export type TDefiChain = 'Ethereum' | 'Bitcoin';
