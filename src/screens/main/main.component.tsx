import * as React from "react";
import {
	Container,
	Content,
	Text,
	Body,
	Button,
    Spinner,
    Header,
    Title,
    Footer,
    FooterTab
} from "native-base"

export class MainScreen extends React.Component {

    public render():any {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Main</Title>
                    </Body>
                </Header>
                <Content />
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Text>Item 1</Text>
                        </Button>
                        <Button vertical>
                            <Text>Item 2</Text>
                        </Button>
                        <Button vertical>
                            <Text>Item 3</Text>
                        </Button>
                        <Button vertical>
                            <Text>Item 4</Text>
                        </Button>
                        <Button vertical>
                            <Text>Item 5</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }

};