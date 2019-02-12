import * as React from "react";
import {
	Container, Content, Text, Right,
    Body, Button, Header, Title,
    Left
} from "native-base";
import { Icon } from "@commons/components";


export class CheckinEventScreen extends React.Component {

    public render():any {
        return (
            <Container>
                <Header>
                    <Left></Left>
                    <Body>
                        <Title>Event Title</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="scan-qrcode" size={20} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Text>Screen of current event</Text>
                    <Text>User will see this screen if he's checked in any event</Text>
                </Content>
            </Container>
        )
    }

};