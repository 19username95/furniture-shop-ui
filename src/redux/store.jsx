import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers'

export const store = createStore(
    persistReducer({
        key: 'root',
        storage: storage,
        whitelist: ['cart']
    }, reducer),
    applyMiddleware(thunk)
)

export const persistore = persistStore(store)
