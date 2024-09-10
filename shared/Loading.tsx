import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

const Loading = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator animating={true} color={'blue'} />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({})