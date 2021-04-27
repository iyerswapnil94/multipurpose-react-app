export interface IStoreAction {
  type: string;
  payload?: any;
}

export type StoreAction<K, V = void> = V extends void ? { type: K } : { type: K } & V;
