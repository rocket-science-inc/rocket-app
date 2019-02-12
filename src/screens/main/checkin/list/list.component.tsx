import * as React from "react";
import {
	Container,
	Content,
	Text,
	Body,
    Header,
    Title
} from "native-base"

export class CheckinListScreen extends React.Component {

    public render():any {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Checkin</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>List of events to checkin</Text>
                    <Text>User will see this screen if he's not checked in any event</Text>
                </Content>
            </Container>
        )
    }

};