import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { HomeScreen } from "./home.component";
import * as HomeScreenOperations from "./home.operations";

export const HomeScreenContainer = connect((state:any, props:any) => {
	return {
		records: state.home.records,
	}
}, (dispatch:any) => {
	return bindActionCreators(HomeScreenOperations, dispatch)
})(<any>HomeScreen);