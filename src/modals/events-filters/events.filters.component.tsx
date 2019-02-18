import * as React from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right, List,
    ListItem, Text, Thumbnail
} from "native-base";
import { Actions } from "react-native-router-flux";
import { Icon } from "@commons/components";
import { IEventsFiltersModalOperations } from "./events.filters.operations";

export interface IEventsFiltersModalProps extends IEventsFiltersModalOperations {
    filters: any
};

export interface IEventsFiltersModalState {
    filters: any
}

export class EventsFiltersModal extends React.Component<IEventsFiltersModalProps, IEventsFiltersModalState> {

    constructor(props){
        super(props);
        this.state = { filters: props.filters };
    };
    
    private apply():void {
        this.props.applyFilters(this.state.filters);
        Actions.pop();
    };
    
    public render():any {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name="x" size={20} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Filters</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.apply()}>
                            <Icon name="check" size={20} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Text>Filters goes here</Text>
                </Content>
            </Container>
        )
    }

};