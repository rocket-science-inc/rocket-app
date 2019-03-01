import * as React from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right, Text,
    Tabs, Tab, View
} from "native-base";
import { FlatList } from "react-native";
import { Actions } from "react-native-router-flux";
import { Icon } from "@commons/components";
import { IEventScreenOperations } from "./event.operations";
import { IEventScreenState } from "./event.reducer";
import { EventScreenGeneral } from "./general/event.general.component";
import { EventScreenAbout } from "./about/event.about.component";
import { EventScreenAgenda } from "./agenda/event.agenda.component";

export interface IEventScreenProps {
    id: string,
    title: string
};

export interface IEventScreenState {
    items: any[]
};

export class EventScreen extends React.Component<IEventScreenProps & IEventScreenState & IEventScreenOperations, any> {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            tab: "agenda"
        };
    }
    
    public componentDidMount(){
        this.props.getEvents(this.props.id);
    };

    public componentWillReceiveProps(props){
        this.setState(() => ({
            items: [{
                id: "general"
            }, {
                id: "tabs"
            }, {
                id: "tab"
            }]
        }))
    };

    private onChangeTab({ i }):void {
        this.setState(() => ({
            tab: i == 0 ? "about" : "agenda"
        }))
    };

    private renderTabs():JSX.Element {
        return (
            <Tabs onChangeTab={this.onChangeTab.bind(this)}>
                <Tab heading="About" key="about"></Tab>
                <Tab heading="Agenda" key="agenda"></Tab>
            </Tabs>
        )
    };

    private renderItem({ item }):JSX.Element | null {
        if (item.id == "general" && this.props.event.title) {
            return <EventScreenGeneral {...this.props.event} />
        } else if (item.id == "tabs") {
            return this.renderTabs()
        } else if (item.id == "tab" && this.state.tab == "about") {
            return <EventScreenAbout {...this.props.event} />
        } else if (item.id == "tab" && this.state.tab == "agenda") {
            return <EventScreenAgenda agenda={this.props.event.agenda} />
        };
        return null;
    };

    public render():JSX.Element {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name="arrow-left" size={20} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <View style={{flex: 1}}>
                    <FlatList
                        data={this.state.items}
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={(item) => item.id}
                        stickyHeaderIndices={[1]}
                    ></FlatList>
                </View>
            </Container>
        )
    }

};