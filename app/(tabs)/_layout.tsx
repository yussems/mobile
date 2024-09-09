import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="(users)"
                options={{
                    title: "Kullanıcılar",
                    headerTitle: "Kullanıcılar",
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color="black" />,

                }} />
            <Tabs.Screen
                name="(todos)"
                options={{
                    title: "Görevler",
                    headerTitle: "Görevler",
                    tabBarIcon: ({ color }) => <MaterialIcons name="task" size={24} color="black" />,

                }} />
            <Tabs.Screen
                name="(posts)"
                options={{
                    title: "Gönderiler",
                    headerTitle: "Gönderiler",
                    tabBarIcon: ({ color }) => <MaterialIcons name="local-post-office" size={24} color="black" />,

                }} />
            <Tabs.Screen
                name="(favorite)"
                options={{
                    title: "Favoriler",
                    headerTitle: "Favoriler",
                    tabBarIcon: ({ color }) => <MaterialIcons name="favorite" size={24} color="black" />,
                }} />
        </Tabs>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})