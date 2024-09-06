import { UserInfo } from '@/types/user';
import { customTheme } from '@/utils/theme';
import React, { useRef, useState } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text, IconButton, Icon } from 'react-native-paper';
import UserBottomSheet from './UserBottomSheet';



export default function UserCard({ ...props }: UserInfo) {

    return (
        <>

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{
                        flexDirection: 'row', gap: customTheme.style.margin.large
                    }}>
                        <Image style={{ width: 68, height: 68, }} source={require('@/assets/images/user.png')} />
                        <View
                        >
                            <Text>{props?.name}</Text>
                            <Text>{props?.email}</Text>
                            <View style={{ marginTop: customTheme.style.margin.large }}>
                                <Text>{props?.phone}</Text>
                            </View>
                        </View>
                    </View>
                    <View >
                        <TouchableOpacity>
                            <Icon
                                source="dots-vertical"
                                color={customTheme.themes.colors.text.primary}
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: customTheme.themes.colors.border.primary,
        borderRadius: customTheme.style.radius.medium,
        padding: customTheme.style.margin.medium,
    },
});