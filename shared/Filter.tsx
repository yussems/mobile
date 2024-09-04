import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';

export default function Filter() {
    const { spacing, roundness, colors } = useTheme();
    return (
        <View style={{
            width: "100%",
            paddingHorizontal: spacing.large
        }}>
            <View style={[
                styles.container,
                {
                    borderWidth: 1,
                    borderColor: colors.border,
                    borderRadius: roundness
                }
            ]}>

                <View style={{ alignItems: 'center', width: '50%' }}>
                    <Text>asd</Text>
                </View>
                <View style={{ alignItems: 'center', width: '50%' }}>
                    <Text>asd</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 32,

    },
});