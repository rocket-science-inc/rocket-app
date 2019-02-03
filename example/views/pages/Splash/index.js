import React, { Component } from "react"
import { View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { duckOperations } from "src/redux/Onboarding/duck"
import { Actions } from "react-native-router-flux"

class AuthContainer extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		if (this.props.loggedIn){
			Actions.reset("main")
		} else {
			Actions.reset("onboarding")
		}
	}

	render() {
		return <View/>
	}
}

/**
 * This function takes data from the app current state,
 * and insert/links it into the props of our component.
 */
function mapStateToProps(state, props) {
	return {
		loggedIn: state.authReducers.auth.loggedIn
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(duckOperations, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
