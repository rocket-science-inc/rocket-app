import * as React from "react";
import { Image } from "react-native";
import { Card, CardItem, Button, Text, Left, Right, Body } from "native-base";
import { Icon } from "@commons/components";
import { Date } from "@commons/locale";
import { styles } from "./event.card.styles";

interface IState {}

export interface IProps {
    image: string,
    title: string,
    start: number,
    location: any
};

export class EventCard extends React.Component<IProps, IState> {

    public render():any {
        return (
            <Card>
                <CardItem cardBody>
                    <Image
                        source={{uri: this.props.image}}
                        style={{height: 200, flex: 1}}
                    />
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={styles.date}>{Date.format(this.props.start, "ll LT")}</Text>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text note>{this.props.location.streetAddress}</Text>
                    </Body>
                </CardItem>
                <CardItem bordered footer>
                    <Left>
                        <Button iconLeft primary small bordered>
                            <Icon name="star" style={styles.btnIcon} />
                            <Text>Interested</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button iconLeft primary small bordered>
                            <Icon name="share" style={styles.btnIcon} />
                            <Text>Share</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        )
    };

}