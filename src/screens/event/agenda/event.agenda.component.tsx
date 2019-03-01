import * as React from "react";
import {
    View, Text, Card, CardItem, Left,
    Thumbnail, Body, Right
} from "native-base";
import { date } from "@commons/utils";
import { styles } from "./event.agenda.styles";

interface IEventScreenAgendaProps {
    agenda: any[]
};

interface IEventScreenAgendaState {
    agenda: any[]
};

export class EventScreenAgenda extends React.Component<IEventScreenAgendaProps, IEventScreenAgendaState> {

    private lectures(lectures:any[]):JSX.Element[] {
        return lectures.map(lecture => {
            console.log(lecture.speaker)
            return (
                <Card transparent key={lecture.id}>
                    <CardItem style={{padding: 0, borderWidth: 0}}>
                        <Left style={{flex: 1}}>
                            <Thumbnail source={{uri: lecture.speaker.avatar}} />
                            <Body>
                                <Text>{lecture.speaker.name}</Text>
                                <Text note>{lecture.speaker.company.name}</Text>
                            </Body>
                            <Right>
                                <Text style={{color: "red", fontSize: 12}}>
                                    {[
                                        date.format(lecture.startTime, "LT"),
                                        date.format(lecture.endTime, "LT")
                                    ].join("\n")}
                                </Text>
                            </Right>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{lecture.description}</Text>
                        </Body>
                    </CardItem>
                </Card>
            )
        })
    }
    
    private agenda(agenda):JSX.Element[] {
        return Object.keys(agenda).map(group => {
            return (
                <View key={group} style={{paddingBottom: 16}}>
                    <Text style={styles.date}>{group}</Text>
                    <View>{this.lectures(agenda[group])}</View>
                </View>
            )
        })
    };

    private process(agenda:any[]):any[] {
        return (agenda || []).map((item) => {
            return {
                ...item,
                group: `${date.format(item.startTime, "dddd, D MMMM")}`
            }
        }).reduce((res, item) => {
            return {
                ...res,
                [item.group]: res[item.group] ? [...res[item.group], item] : [item]
            }
        }, {})
    };

    public render():JSX.Element {
        return ((agenda) => {
            return (
                <View style={styles.agenda}>
                    {this.agenda(agenda)}
                </View>
            )
        })(this.process(this.props.agenda))
    };

};