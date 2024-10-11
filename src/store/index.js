"use client";


import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartSlice';
import { shoppingCardReducer } from './reducers/shoppingCardSlice';
import { sidebarReducer } from './reducers/sidebarSlice';
import { isOpenReducer } from './reducers/isOpenSlice';
import { thunk } from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import  { productReducer } from './reducers/productSlice';
import { paginationReducer } from './reducers/paginationSlice';
import { queryReducer } from './reducers/querySlice';
import { wishlistReducer } from './reducers/wishslice';
import { settingReducer } from './reducers/settingsSlice';


const rootReducer = combineReducers({
	cart: cartReducer,
	wishlist: wishlistReducer,
	shoppingCard: shoppingCardReducer,
	sidebar: sidebarReducer,
	isOpen: isOpenReducer,
	products: productReducer,
	pagination:paginationReducer,
	queryParam:queryReducer,
	setting:settingReducer
	// user: authReducer,
	// search: searchReducer,
  });
  
  // Configuration for redux-persist to use sessionStorage
  const persistConfig = {
	key: 'root',
	storage: storageSession, // Session-based storage
	data: ['cart',"setting", 'wishlist','sidebar','user','isOpen','shoppingCard','products','pagination','queryParam'], // Only persist these reducers
  };
  
  // Persist reducer with the session storage
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  // Store configuration
  export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
	  getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
	devTools: process.env.NODE_ENV !== 'production',
  });
  
  // Persistor configuration for syncing with sessionStorage
  export const persistor = persistStore(store);
  
  export default store;