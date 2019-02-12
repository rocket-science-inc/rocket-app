import * as React from "react";

import { CheckinListScreenContainer } from "./list/list.container";
import { CheckinEventScreenContainer } from "./event/event.container";

export interface ICheckinScreenProps {
    checkedin: boolean
};

export interface ICheckinScreenState {

};

export class CheckinScreen extends React.Component<ICheckinScreenProps, ICheckinScreenState> {

    public render():any {
        if (this.props.checkedin) {
            return <CheckinEventScreenContainer />
        } else {
            return <CheckinListScreenContainer />
        }
    }

};