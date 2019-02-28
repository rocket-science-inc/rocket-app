import * as React from "react";
import { Text, View } from "native-base";
import { styles } from "./event.about.styles";

interface IEventScreenAboutProps {
    details: string
};

export class EventScreenAbout extends React.Component<IEventScreenAboutProps> {

    private details():JSX.Element {
        return (
            <View>
                <Text style={styles.title}>Details</Text>
                <Text style={styles.content}>
                    {this.props.details}
                </Text>
            </View>
        );
    };

    public render():JSX.Element {
        return (
            <View style={styles.about}>
                {this.details()}
            </View>
        );
    };

};