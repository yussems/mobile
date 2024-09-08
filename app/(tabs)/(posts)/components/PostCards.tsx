import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { customTheme } from '@/utils/theme';
import { Button, Icon, Text } from 'react-native-paper';
import { IPost } from '@/types/posts';
import { Link } from 'expo-router';

export default function PostCards({ ...props }: IPost) {
    return (
        <View>
            <View style={styles.container}>
                <View style={{ marginBottom: 16 }}>

                    <Text>{props.title}</Text>
                </View>
                <View style={{ marginBottom: 16 }}>
                    <Text
                        numberOfLines={4}
                        ellipsizeMode='tail'
                        textBreakStrategy='highQuality'

                    >{props.body}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 24 }}>
                        <Text>see PostCards</Text>
                        <Link
                            href={{
                                pathname: '/(tabs)/posts /details/[id]',
                                params: { id: props.id },
                            }}>
                            <Icon
                                source="chevron-right-box-outline"
                                color={customTheme.themes.colors.text.primary}
                                size={32}
                            />
                        </Link>
                    </View>
                </View>
            </View>
        </View>
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

