import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ProfileScreen } from "./profile.component";
import * as ProfileScreenOperations from "./profile.operations";

export const ProfileScreenContainer = connect((state:any, props:any) => {
	return {
		records: state.home.records,
	}
}, (dispatch:any) => {
	return bindActionCreators(ProfileScreenOperations, dispatch)
})(<any>ProfileScreen);