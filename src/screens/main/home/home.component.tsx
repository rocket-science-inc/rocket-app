import * as React from "react";
import { Container, Header, Body, Content, Title } from "native-base";
import { FlatList } from "react-native";
import { EventCard } from "@commons/components";


export class HomeScreen extends React.Component<any, any> {

    constructor(props){
        super(props);
    };

    public componentDidMount():void {
        this.props.loadFeed();
    };

    private renderCard({ item }):any {
        return (<EventCard {...item} key={item.id} />)
    };

    public render():any {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Rocket</Title>
                    </Body>
                </Header>
                <Content>
                    <FlatList
                        data={this.props.feed}
                        renderItem={this.renderCard.bind(this)}
                        keyExtractor={(item) => item.id}
                    />
                </Content>
            </Container>
        )
    };

};