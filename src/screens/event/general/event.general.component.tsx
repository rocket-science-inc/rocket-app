import * as React from "react";
import { Text, Image } from "react-native";
import { View, Button } from "native-base";
import { date } from "@commons/utils";
import { Icon } from "@commons/components";
import { styles } from "./event.general.styles";

interface IEventScreenGeneralProps {
    image: string,
    title: string,
    startDate: number,
    location: {
        streetAddress: string
    }
};

export class EventScreenGeneral extends React.Component<IEventScreenGeneralProps> {

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
                    {this.props.location.streetAddress}
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
    }

    public render():JSX.Element {
        return (
            <View style={styles.general}>
                {this.poster()}
                {this.heading()}
                {this.actions()}
            </View>
        )
    };

};