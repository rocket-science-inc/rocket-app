import * as React from "react";
import {
        Container, Header, Body, Left,
        Content, Title, Right, Button,
        Badge, Text
} from "native-base";
import { FlatList } from "react-native";
import { EventCard, Icon } from "@commons/components";
import { IHomeScreenOperations } from "./profile.operations";

export interface IProfileScreenProps extends IHomeScreenOperations {
    records: any[]
};

export interface IProfileScreenState {

};

export class ProfileScreen extends React.Component<IProfileScreenProps, IProfileScreenState> {

    constructor(props){
        super(props);
    };

    public render():any {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="settings" size={20} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Profile</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="qrcode" size={20} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                </Content>
            </Container>
        )
    };

};