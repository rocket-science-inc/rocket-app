import React from "react"
import { Provider, connect } from "react-redux"
import { Router, Actions, Scene } from "react-native-router-flux"
import { PersistGate } from 'redux-persist/integration/react'
import EStyleSheet from "react-native-extended-stylesheet"
import { persistor, store } from "src/redux/Store/Store"
import GlobalStyles from "src/views/common/GlobalStyles"

import Splash from "src/views/pages/Splash"
import Onboarding from "src/views/pages/Onboarding"
import Interests from "src/views/pages/Interests"
import Profile from "src/views/pages/Profile"
import EditProfile from "src/views/pages/EditProfile"
import UserProfile from "src/views/pages/UserProfile"
import Settings from "src/views/pages/Settings"
import Main from "src/views/pages/Main"
import ChatList from "src/views/pages/ChatList"
import Chat from "src/views/pages/Chat"
import ChatSettings from "src/views/pages/ChatSettings"
import LoadingView from "src/views/components/LoadingView"

// Ignore the warnings from the 3rd party libraries
console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated', 'Task orphaned'];

// Build the stylesheets
EStyleSheet.build(GlobalStyles);

// Connect redux with router flux
const ConnectedRouter = connect(/*state & dispatch for auth and initial props*/)(Router)

const Scenes = Actions.create(
	<Scene key="root">
		<Scene key="splash" hideNavBar component={Splash} />
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
		<Scene key="chatSettings" hideNavBar component={ChatSettings} />
	</Scene>,
)

const App = () => (
	<Provider store={store}>
		<PersistGate loading={<LoadingView />} persistor={persistor}>
			<ConnectedRouter scenes={Scenes} />
		</PersistGate>
	</Provider>
)

export default App
