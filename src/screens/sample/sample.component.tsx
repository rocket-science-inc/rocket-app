import * as React from "react";
import {
	Container,
	Content,
	Text,
	Body,
	Button,
    Header,
    Title,
    Footer,
    FooterTab,
    Icon
} from "native-base"

export class SampleScreen extends React.Component {

    public render():any {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Sample</Title>
                    </Body>
                </Header>
                <Content />
            </Container>
        )
    }

};