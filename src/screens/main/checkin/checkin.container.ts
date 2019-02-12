import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CheckinScreen } from "./checkin.component";
import * as CheckinScreenOperations from "./checkin.operations";

export const CheckinScreenContainer = connect((state:any, props:any) => {
	return {
		checkedin: state.checkin.checkedin
	}
}, (dispatch:any) => {
	return bindActionCreators(CheckinScreenOperations, dispatch)
})(<any>CheckinScreen);