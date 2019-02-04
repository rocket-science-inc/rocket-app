import * as React from "react";
import {
    Container, Header, Body,
    Content, Segment, Button, Text
} from "native-base";
import { EventsScreenListTabContainer } from "./list/events.list.container";
import { EventsScreenMapTabContainer } from "./map/events.map.container";

export class EventsScreen extends React.Component<any, any> {

    constructor(props){
        super(props);
        this.state = { active: "list" }
    };

    private switch(active: string):void {
        this.setState({ active });
    };

    private tabs():any {
        return [{
            label: "List",
            name: "list"
        }, {
            label: "Map",
            name: "map"
        }].map((tab, index) => {
            return (
                <Button
                    first={index == 0}
                    last={index == 1}
                    active={this.state.active == tab.name}
                    onPress={() => this.switch(tab.name)}
                    key={index}
                >
                    <Text>{tab.label}</Text>
                </Button>
            )
        });
    };

    private content():any {
        if (this.state.active == "list") {
            return <EventsScreenListTabContainer />
        } else if (this.state.active == "map") {
            return <EventsScreenMapTabContainer />
        }
    };

    public render():any {
        return (
            <Container>
                <Header hasSegment>
                    <Body>
                        <Segment>{this.tabs()}</Segment>
                    </Body>
                </Header>
                <Content>{this.content()}</Content>
            </Container>
        )
    };

};