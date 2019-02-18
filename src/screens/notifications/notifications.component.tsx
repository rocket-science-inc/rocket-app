import * as React from "react";
import {
	Container,
	Content,
	Body,
	Button,
    Header,
    Title,
    Left,
    Right
} from "native-base";
import { Actions } from "react-native-router-flux";
import { Icon } from "@commons/components";

export class NotificationsScreen extends React.Component {

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
                        <Title>Notifications</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content />
            </Container>
        )
    }

};