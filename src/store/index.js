"use client";
// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import cartReducer from "./cartReducer";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);

//  const store = configureStore({
//   reducer: {
//     cart: persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartSlice';
// import { isOpenReducer } from './reducers/isOpenSlice';
// import { searchReducer } from './reducers/searchSlice';
// import { shoppingCardReducer } from './reducers/shoppingCardSlice';
// import { sidebarReducer } from './reducers/sidebarSlice';
// import { authReducer } from './reducers/userSlice';

export const store = configureStore({
	reducer: {
		// shoppingCard: shoppingCardReducer,
		// sidebar: sidebarReducer,
		cart: cartReducer,
		// search: searchReducer,
		// isOpen: isOpenReducer,
		// user: authReducer, // Add the authReducer
	},
	devTools: true,
});