import * as React from "react";
import {
        Container, Header, Body, Left,
        Content, Title, Right, Button
} from "native-base";
import { Actions } from "react-native-router-flux";
import { FlatList } from "react-native";
import { EventCard, Icon } from "@commons/components";
import { IHomeScreenOperations } from "./home.operations";

export interface IHomeScreenProps extends IHomeScreenOperations {
    records: any[]
};

export interface IHomeScreenState {

};

export class HomeScreen extends React.Component<IHomeScreenProps, IHomeScreenState> {

    constructor(props){
        super(props);
    };

    public componentDidMount():void {
        this.props.loadFeed({
            page: 1,
            count: 25
        });
    };

    private go(screen:string, props?:any):void {
        Actions.push(screen, props);
    };

    private renderCard({ item }):any {
        return (
            <EventCard
                {...item} key={item.id}
                onPress={() => this.go("event", {id: item.id, title: item.title})}
            />
        );
    };

    public render():any {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.go("events")}>
                            <Icon name="calendar" size={20} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Rocket</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.go("notifications")}>
                            <Icon name="bell" size={20} />
                        </Button>
                        <Button transparent onPress={() => this.go("chats")}>
                            <Icon name="send" size={20} />
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
    };

};