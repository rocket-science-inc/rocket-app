import * as React from "react";
import {
        Container, Header, Body, Left,
        Content, Title, Right, Button,
        Badge, Text
} from "native-base";
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

    private renderCard({ item }):any {
        return (<EventCard {...item} key={item.id} />)
    };

    public render():any {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="bell" size={20} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Rocket</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="calendar" size={20} />
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