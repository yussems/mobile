import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { customTheme } from '@/utils/theme'
import { IPostComment } from '@/types/posts'

const CommentCard = ({ ...props }: IPostComment) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentRow}>
                <Image
                    style={styles.image}
                    source={require('@/assets/images/CardImage.png')}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{props.name}</Text>
                    <Text style={styles.bodyText}>{props.body}</Text>
                </View>
            </View>
        </View>
    )
}

export default CommentCard

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: customTheme.themes.colors.border.primary,
        borderRadius: customTheme.style.radius.medium,
        padding: customTheme.style.margin.medium,
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    textContainer: {
        flex: 1,
    },
    nameText: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    bodyText: {
        flexShrink: 1,
    },
})
