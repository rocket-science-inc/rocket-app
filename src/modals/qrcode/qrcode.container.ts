import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { QRCodeModal } from "./qrcode.component";

export const QRCodeModalContainer = connect((state:any, props:any) => {
	return {
		filters: state.eventsFilters
	}
}, (dispatch:any) => {
	return bindActionCreators({}, dispatch)
})(<any>QRCodeModal);