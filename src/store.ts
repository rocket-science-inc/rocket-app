import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk"
import * as logger from "redux-logger";

import { MainScreenReducer } from "./screens/main/main.reducer";

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const middleware = [thunk]

const rootReducer = combineReducers({
	MainScreenReducer
})

if (process.env.NODE_ENV !== "production") {
	if (typeof logger === "function") middleware.push(logger);
};

const persistConfig = {
	key: "root",
	storage: storage,
	stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
	blacklist: ['navigation']
};

const pReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
	const enhancer = compose(applyMiddleware(...middleware))
	return createStore(pReducer, {}, enhancer)
}

export const store = configureStore();
export const persistor = persistStore(store);

/* Uncomment to purge store */
// persistor.purge()