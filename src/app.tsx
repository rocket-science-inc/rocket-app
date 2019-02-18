import React from "react"
import { Provider, connect } from "react-redux"
import { Router, Actions, Scene } from "react-native-router-flux"
import { PersistGate } from "redux-persist/integration/react";
import { Icon, Loader } from "@commons/components";
import { GlobalStyles } from "@commons/styles";
import StyleSheet from "react-native-extended-stylesheet"

import { ProfileScreenContainer } from "./screens/main/profile/profile.container";
import { HomeScreenContainer } from "./screens/main/home/home.container";
import { CheckinScreenContainer } from "./screens/main/checkin/checkin.container";
import { ChatsScreenContainer } from "./screens/chats/chats.container";
import { NotificationsScreenContainer } from "./screens/notifications/notifications.container";
import { EventsScreenContainer } from "./screens/events/events.container";

import { store, persistor } from "./store";

// Ignore the warnings from the 3rd party libraries
console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated', 'Task orphaned'];

// Build the stylesheets
StyleSheet.build(GlobalStyles);

const ReduxRouter = connect()(Router);

const Scenes = Actions.create(
	<Scene key="root">
		<Scene key="main" hideNavBar tabs={true} showLabel={false} lazy={false}>
			<Scene hideNavBar 
				key="main.feed"
				icon={() => <Icon name="home" size={22} />}
				component={HomeScreenContainer}
			/>
			<Scene hideNavBar
				key="main.checkin"
				icon={() => <Icon name="map-pin" size={30} />}
				component={CheckinScreenContainer}
			/>
			<Scene hideNavBar
				key="main.profile"
				icon={() => <Icon name="user" size={22} />}
				component={ProfileScreenContainer}
			/>
		</Scene>
		<Scene hideNavBar
			key="chats"
			component={ChatsScreenContainer}
		></Scene>
		<Scene hideNavBar
			key="notifications"
			component={NotificationsScreenContainer}
		></Scene>
		<Scene hideNavBar initial
			key="events"
			component={EventsScreenContainer}
		></Scene>
	</Scene>,
)

export const App = () => (
	<Provider store={store}>
		<PersistGate loading={<Loader />} persistor={persistor}>
			<ReduxRouter scenes={Scenes} />
		</PersistGate>
	</Provider>
);
