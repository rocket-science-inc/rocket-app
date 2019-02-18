import * as React from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right, List,
    ListItem, Text, Thumbnail
} from "native-base";
import { Actions } from "react-native-router-flux";
import { Icon } from "@commons/components";
import { text, date } from "@commons/utils";
import { IChatsScreenOperations } from "./chats.operations";

export interface IChatsScreenProps extends IChatsScreenOperations {
    conversations: any[]
};

export interface IChatsScreenState {

};

export class ChatsScreen extends React.Component<IChatsScreenProps, IChatsScreenState> {

    public componentDidMount():void {
        this.props.getConversations()
    };
    
    private renderListItem(item):any {
        return (
            <ListItem avatar onPress={() => {}}>
                <Left>
                    <Thumbnail source={{ uri: item.avatar }} />
                </Left>
                <Body>
                    <Text>{item.fullName}</Text>
                    <Text note>{text.trancate(item.lastMessageText, 50)}</Text>
                </Body>
                <Right>
                    <Text note>{date.format(item.lastMessageTime, "LT")}</Text>
                </Right>
            </ListItem>
        );
    };
    
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
                        <Title>Chats</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="edit" size={20} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List
                        dataArray={this.props.conversations}
                        renderRow={this.renderListItem}
                    />
                </Content>
            </Container>
        )
    }

};