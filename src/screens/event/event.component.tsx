import * as React from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right
} from "native-base";
import { Actions } from "react-native-router-flux";
import { Icon } from "@commons/components";
import { IEventScreenOperations } from "./event.operations";
import { IEventScreenState } from "./event.reducer";

export interface IEventScreenProps {
    id: string,
    title: string
};

export class EventScreen extends React.Component<IEventScreenProps & IEventScreenState & IEventScreenOperations> {

    public componentDidMount(){
        this.props.getEvents(this.props.id)
    };

    public render():JSX.Element {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name="arrow-left" size={20} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content />
            </Container>
        )
    }

};