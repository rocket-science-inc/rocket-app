import * as React from "react";
import { Image } from "react-native";
import {
    Card, CardItem, Button, Text,
    Left, Right, Body, View
} from "native-base";
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
                <CardItem bordered>
                    <Body style={styles.content}>
                        <View style={{flex: 1}}>
                            <Text note style={styles.date}>{Date.format(this.props.start, "ll LT")}</Text>
                            <Text style={styles.title}>{this.props.title}</Text>
                            <Text note>{this.props.location.streetAddress}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button transparent style={styles.btn}>
                                <Icon name="star" size={20} />
                            </Button>
                            <Button transparent style={styles.btn}>
                                <Icon name="share" size={20} />
                            </Button>
                        </View>
                    </Body>
                </CardItem>
            </Card>
        )
    };

}