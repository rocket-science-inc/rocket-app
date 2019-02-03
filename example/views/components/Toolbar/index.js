import React, { Component } from "react"
import {
    Image,
    Alert
} from "react-native"
import {
    Title,
    Body,
    Header,
    Left,
    Right,
    Button,
    Icon,
    Text
} from "native-base"
import styles from "./styles"
import SvgUri from 'react-native-svg-uri'
import { Actions } from "react-native-router-flux"

export default class Toolbar extends Component {

    render() {
        let logo
        if (this.props.screen == "editProfile") {
            logo = <Title style={styles.header_title_small}>Edit Profile</Title>
        } else if (this.props.screen == "settings") {
            logo = <Title style={styles.header_title_small}>Settings</Title>
        } else if (this.props.screen == "chatSettings") {
            logo = <Title style={styles.header_title_small}>Conversation info</Title>
        } else if (this.props.screen == "profile" || this.props.screen == "main" || this.props.screen == "chatList") {
            logo = <Image style={styles.logoIcon} source={require("src/assets/icons/logo.png")} />
        } else if (this.props.screen == "userProfile") {
            logo = <Title style={styles.header_title}>Profile</Title>
        } else {
            logo = this.props.name ?
                <Title style={styles.header_chat_title}>{this.props.name}</Title>
                : <Title style={styles.header_logo}>PROSPECT</Title>
        }

        let backgroundDarkness = 0
        if (this.props.screen == "settings") {
            backgroundDarkness = 1
        } else if (this.props.screen == "chatSettings") {
            backgroundDarkness = 2
        }

        let leftIcon
        let leftIconListener
        let rightIcon
        let rightIconListener
        let logoListener
        if (this.props.screen == "editProfile") {
            rightIcon = <Text style={styles.action}>Done</Text>
            rightIconListener = () => this.goBack()
        } else if (this.props.screen == "settings") {
            rightIcon = <Text style={styles.action}>Done</Text>
            rightIconListener = () => this.goBack()
        } else if (this.props.screen == "profile") {
            rightIcon = <SvgUri width={26} height={26} source={require('src/assets/icons/message_inactive.svg')} />
            rightIconListener = () => this.openChatList()
            logoListener = () => this.openMain()
            leftIcon = <SvgUri width={26} height={26} source={require('src/assets/icons/profile.svg')} />
        } else if (this.props.screen == "userProfile") {
            rightIcon = <SvgUri width={26} height={26} source={require('src/assets/icons/message_inactive.svg')} />
            leftIcon = <SvgUri width={26} height={26} source={require('src/assets/icons/profile.svg')} />
        } else if (this.props.screen == "main") {
            rightIcon = <SvgUri width={26} height={26} source={require('src/assets/icons/message_inactive.svg')} />
            rightIconListener = () => this.openChatList()
            leftIcon = <SvgUri width={26} height={26} source={require('src/assets/icons/profile_inactive.svg')} />
            leftIconListener = () => this.openProfile()
        } else if (this.props.screen == "chatList") {
            rightIcon = <SvgUri width={26} height={26} source={require('src/assets/icons/message.svg')} />
            logoListener = () => this.openMain()
            leftIcon = <SvgUri width={26} height={26} source={require('src/assets/icons/profile_inactive.svg')} />
            leftIconListener = () => this.openProfile()
        } else if (this.props.screen == "chat") {
            rightIcon = <SvgUri width={26} height={26} source={require('src/assets/icons/settings.svg')} />
            rightIconListener = () => this.openSettings()
            leftIcon = <Image style={styles.header_back_icon} source={require('src/assets/icons/back.png')} />
            leftIconListener = () => this.goBack()
        } else if (this.props.screen == "chatSettings") {
            leftIcon = <Image style={styles.header_back_icon} source={require('src/assets/icons/back.png')} />
            leftIconListener = () => this.goBack()
        }

        return (
            <Header style={[styles.header_divider, { backgroundColor: backgroundDarkness == 2 ? "#fafafa" : backgroundDarkness == 1 ? "#f9f9f9" : "#f8f8f8" }]}>
                <Left style={styles.header_left_icon}>
                    <Button transparent onPress={leftIconListener} disabled={leftIconListener == null}>
                        {leftIcon}
                    </Button>
                </Left>
                <Body style={styles.header_body}>
                    <Button transparent onPress={logoListener} disabled={logoListener == null} >
                        {logo}
                    </Button>
                </Body>
                <Right style={styles.header_right_icon}>
                    <Button transparent onPress={rightIconListener} disabled={rightIconListener == null} >
                        {rightIcon}
                    </Button>
                </Right>
            </Header>
        )
    }

    goBack() {
        Actions.pop()
    }

    openChatList() {
        Actions.replace("chatList")
    }

    openMain() {
        Actions.replace("home")
    }

    openProfile() {
        Actions.replace("profile")
    }

    openSettings() {
        Actions.chatSettings({ recipient: this.props.recipient })
    }
}


