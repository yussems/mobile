import React from 'react'
import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
export default function HomeLayout() {
    const theme = useTheme()
    return (
        <View style={{ backgroundColor: theme.colors.surface, height: '100%' }}>
            <View style={{ marginBottom: 20 }} />
            <View style={{ marginHorizontal: 20, }}>
                <Slot />
            </View>
        </View>
    )
}