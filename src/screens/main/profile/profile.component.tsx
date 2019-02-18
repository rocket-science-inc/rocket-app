import * as React from "react";
import {
        Container, Header, Body, Left,
        Content, Title, Right, Button,
} from "native-base";
import { Actions } from "react-native-router-flux";
import { Icon } from "@commons/components";
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
                        <Button transparent onPress={() => Actions.push("qrcode")}>
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