import React from "react"
import { Provider, connect } from "react-redux"
import { Router, Actions, Scene } from "react-native-router-flux"
import { PersistGate } from "redux-persist/integration/react";
import { Icon } from "native-base";
// import EStyleSheet from "react-native-extended-stylesheet"
// import { persistor, store } from "src/redux/Store/Store"
// import GlobalStyles from "src/views/common/GlobalStyles"

import { EventsScreenContainer } from "./screens/main/events/events.container";
import { SampleScreenContainer } from "./screens/sample/sample.container";

import { Loading } from "./commons/loading/loading.component";

import { store, persistor } from "./store";

// Ignore the warnings from the 3rd party libraries
console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated', 'Task orphaned'];

// Build the stylesheets
// EStyleSheet.build(GlobalStyles);

// Connect redux with router flux
const ConnectedRouter = connect(/*state & dispatch for auth and initial props*/)(Router)

const Scenes = Actions.create(
	<Scene key="root">
		<Scene key="main" hideNavBar tabs={true} lazy={false}>
			<Scene hideNavBar
				tabBarLabel={"Events"}
				key="main.events"
				icon={() => <Icon name="calendar" />}
				component={EventsScreenContainer}
			/>
			<Scene hideNavBar
				tabBarLabel={"Menu 1"}
				key="main.menu1"
				icon={() => <Icon name="bookmark" />}
				component={SampleScreenContainer}
			/>
			<Scene hideNavBar
				tabBarLabel={"Menu 2"}
				key="main.menu2"
				icon={() => <Icon name="bookmark" />}
				component={SampleScreenContainer}
			/>
			<Scene hideNavBar
				tabBarLabel={"Menu 3"}
				key="main.menu3"
				icon={() => <Icon name="bookmark" />}
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
		<PersistGate loading={<Loading />} persistor={persistor}>
			<ConnectedRouter scenes={Scenes} />
		</PersistGate>
	</Provider>
);
