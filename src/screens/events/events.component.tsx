import * as React from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right
} from "native-base";
import { FlatList } from "react-native";
import { Actions } from "react-native-router-flux";
import { Icon, EventCard } from "@commons/components";
import { IEventsScreenOperations } from "./events.operations";

export interface IEventsScreenProps extends IEventsScreenOperations {
    records: any[]
};

export class EventsScreen extends React.Component<IEventsScreenProps> {

    public componentDidMount(){
        this.props.getEvents({
            page: 1,
            count: 25
        })
    };

    private renderCard({ item }):any {
        return (<EventCard {...item} key={item.id} />)
    };

    public render():any {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name="arrow-left" size={20} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Events</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => Actions.push("eventsFilters")}>
                            <Icon name="filter" size={20} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <FlatList
                        data={this.props.records}
                        renderItem={this.renderCard.bind(this)}
                        keyExtractor={(item) => item.id}
                    />
                </Content>
            </Container>
        )
    }

};