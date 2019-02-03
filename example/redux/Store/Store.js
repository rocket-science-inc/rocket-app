import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk"
import logger from "redux-logger"

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import authReducers from "src/redux/Onboarding/duck"
import interestsReducers from "src/redux/Interests/duck"
import chatListReducers from "src/redux/ChatList/duck"
import chatReducers from "src/redux/Chat/duck"
import settingsReducers from "src/redux/Settings/duck"
import mainReducers from "src/redux/Main/duck"
import userProfileReducers from "src/redux/UserProfile/duck"

const middleware = [thunk]

const rootReducer = combineReducers({
	authReducers,
	interestsReducers,
	chatListReducers,
	chatReducers,
	settingsReducers,
	mainReducers,
	userProfileReducers
})

if (process.env.NODE_ENV !== "production") {
	if (typeof logger === "function") {
		middleware.push(logger)
	}
}

const persistConfig = {
	key: 'root',
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