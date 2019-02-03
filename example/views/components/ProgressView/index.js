import React, { Component } from "react"
import { View, ActivityIndicator } from "react-native"
import GlobalStyles from "src/views/common/GlobalStyles"

class ProgressView extends Component {

    render() {
        return (
            <View style={{ backgroundColor: "#fefefe", flex: 1, justifyContent: "center", alignItems: "center" }} >
                <ActivityIndicator size="large" color={GlobalStyles.$primaryColor} />
            </View>
        )
    }
}

export default ProgressView
