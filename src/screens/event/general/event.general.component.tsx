import * as React from "react";
import { Image } from "react-native";
import { View, Button, ListItem, Left, Body, Text } from "native-base";
import { date } from "@commons/utils";
import { Icon } from "@commons/components";
import { styles } from "./event.general.styles";

interface IEventScreenGeneralProps {
    image: string,
    title: string,
    startDate: number,
    location: {
        streetName: string,
        title: string,
        city: string,
        country: string,
        zipCode: string
    }
};

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export class EventScreenGeneral extends React.Component<IEventScreenGeneralProps> {

    public bold(str:string):JSX.Element {
        return <Text style={{fontWeight: "bold"}}>{str}</Text>
    };

    private poster():JSX.Element {
        return (
            <View>
                <Image
                    style={styles.posterImage}
                    source={{uri: this.props.image}}
                />
            </View>
        )
    };

    private heading():JSX.Element {
        return (
            <View style={styles.headingContainer}>
                <Text style={styles.headingDate}>
                    {date.format(this.props.startDate, "llll").toUpperCase()}
                </Text>
                <Text style={styles.headingTitle}>
                    {this.props.title}
                </Text>
                <Text style={styles.headingLocation}>
                    {`${this.props.location.title} | ${this.props.location.city}`}
                </Text>
            </View>
        );
    };

    public actions():JSX.Element {
        return (
            <View style={styles.actionsContainer}>
                <View style={styles.actionItem}>
                    <Button large primary bordered style={styles.actionsBtn}>
                        <Icon name="star" size={20} />
                    </Button>
                    <Text>Interested</Text>
                </View>
                <View style={styles.actionItem}>
                    <Button large primary bordered style={styles.actionsBtn}>
                        <Icon name="check-circle" size={20} />
                    </Button>
                    <Text>Going</Text>
                </View>
                <View style={styles.actionItem}>
                    <Button large primary bordered style={styles.actionsBtn}>
                        <Icon name="share" size={20} />
                    </Button>
                    <Text>Share</Text>
                </View>
            </View>
        )
    };

    public details():JSX.Element {
        return (
            <View style={styles.detailsContainer}>
                <ListItem icon noBorder>
                    <Left>
                        <Icon name="globe" size={20} />
                    </Left>
                    <Body>
                        <Text style={styles.detailsText}>Public event by <B>Wix</B></Text>
                    </Body>
                </ListItem>
                <ListItem avatar noBorder>
                    <Left>
                        <Icon name="map-pin" size={20} />
                    </Left>
                    <Body>
                        <Text style={styles.detailsText}>{this.props.location.title}</Text>
                        <Text note>{`${this.props.location.streetName}, ${this.props.location.city}, ${this.props.location.country}, ${this.props.location.zipCode}`}</Text>
                    </Body>
                </ListItem>
                <ListItem icon noBorder>
                    <Left>
                        <Icon name="users" size={20} />
                    </Left>
                    <Body>
                        <Text style={styles.detailsText}>2 Going | 24 Interested</Text>
                    </Body>
                </ListItem>
                <ListItem avatar noBorder>
                    <Left>
                        <Icon name="credit-card" size={20} />
                    </Left>
                    <Body>
                        <Text style={styles.detailsText}>Tickets Available</Text>
                        <Text note>tickets-online.com.ua</Text>
                    </Body>
                </ListItem>
            </View>
        )
    };

    public render():JSX.Element {
        return (
            <View style={styles.general}>
                {this.poster()}
                {this.heading()}
                {this.actions()}
                {this.details()}
            </View>
        )
    };

};