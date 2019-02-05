import * as React from "react";
import {
    Container, Header, Body,
    Content, Title, Button, Text
} from "native-base";

export class HomeScreen extends React.Component<any, any> {

    constructor(props){
        super(props);
    };

    public componentDidMount():void {
        this.props.getFeed();
    };

    public render():any {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Rocket</Title>
                    </Body>
                </Header>
                <Content></Content>
            </Container>
        )
    };

};