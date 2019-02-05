import React from "react"
import { Provider, connect } from "react-redux"
import { Router, Actions, Scene } from "react-native-router-flux"
import { PersistGate } from "redux-persist/integration/react";
import { Icon, Loader } from "@commons/components";
// import EStyleSheet from "react-native-extended-stylesheet"
// import { persistor, store } from "src/redux/Store/Store"
// import GlobalStyles from "src/views/common/GlobalStyles"

import { EventsScreenContainer } from "./screens/main/events/events.container";
import { SampleScreenContainer } from "./screens/sample/sample.container";
import { HomeScreenContainer } from "./screens/main/home/home.container";

import { store, persistor } from "./store";

// Ignore the warnings from the 3rd party libraries
console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated', 'Task orphaned'];

// Build the stylesheets
// EStyleSheet.build(GlobalStyles);

const ReduxRouter = connect()(Router);

const Scenes = Actions.create(
	<Scene key="root">
		<Scene key="main" hideNavBar tabs={true} showLabel={false} lazy={false}>
			<Scene hideNavBar 
				key="main.events"
				icon={() => <Icon name="home" size={22} />}
				component={HomeScreenContainer}
			/>
			<Scene hideNavBar
				key="main.chats"
				icon={() => <Icon name="message-square" size={22} />}
				component={SampleScreenContainer}
			/>
			<Scene hideNavBar
				key="main.qrcode"
				icon={() => <Icon name="qrcode" size={30} />}
				component={SampleScreenContainer}
			/>
			<Scene hideNavBar
				key="main.menu2"
				icon={() => <Icon name="bookmark" size={22} />}
				component={SampleScreenContainer}
			/>
			<Scene hideNavBar
				key="main.user"
				icon={() => <Icon name="user" size={22} />}
				component={SampleScreenContainer}
			/>
		</Scene>
		{/* <Scene key="splash" hideNavBar component={Splash} />
		<Scene key="onboarding" hideNavBar component={Onboarding} />
		<Scene key="interests" hideNavBar component={Interests} />
		<Scene key="main"
			tabs
			lazy={false}
			hideTabBar>
			<Scene key="profile" hideNavBar component={Profile} />
			<Scene key="home" initial hideNavBar component={Main} />
			<Scene key="chatList" hideNavBar component={ChatList} />
		</Scene>
		<Scene key="editProfile" hideNavBar component={EditProfile} />
		<Scene key="userProfile" hideNavBar component={UserProfile} />
		<Scene key="settings" hideNavBar component={Settings} />
		<Scene key="chat" hideNavBar component={Chat} />
		<Scene key="chatSettings" hideNavBar component={ChatSettings} /> */}
	</Scene>,
)

export const App = () => (
	<Provider store={store}>
		<PersistGate loading={<Loader />} persistor={persistor}>
			<ReduxRouter scenes={Scenes} />
		</PersistGate>
	</Provider>
);
