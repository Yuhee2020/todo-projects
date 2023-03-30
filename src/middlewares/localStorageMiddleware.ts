import { AnyAction } from 'redux'

export const localStorageMiddleware =
  (store: { getState: () => any }) =>
  (next: (action: AnyAction) => AnyAction) =>
  (action: AnyAction) => {
    const result = next(action)

    sessionStorage.setItem('myAppData', JSON.stringify(store.getState()))

    return result
  }
