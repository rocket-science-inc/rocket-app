import * as React from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right, Text,
    View
} from "native-base";
import QRCode from "react-native-qrcode";
import { Actions } from "react-native-router-flux";
import { Icon } from "@commons/components";

export interface QRCodeModalModalProps {
    filters: any
};

export class QRCodeModal extends React.Component<QRCodeModalModalProps> {
    
    public render():any {
        return (
            <Container>
                <Header>
                    <Left></Left>
                    <Body>
                        <Title>QR Code</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name="x" size={20} />
                        </Button>
                    </Right>
                </Header>
                <Content padder contentContainerStyle={{flex: 1}}>
                    <View style={{flex: 1, alignContent: "center", justifyContent: "center"}}>
                        <View style={{flexGrow: 0, alignItems: "center"}}>
                            <QRCode size={200} value={new Date().getTime().toString()} />
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }

};