import * as React from "react";
import { Text } from "native-base";

export class EventsScreenListTab extends React.Component<any, any> {

    public componentDidMount():void {
        this.props.getEvents()
    };

    public render():any {
        return <Text>123</Text>
    };

}