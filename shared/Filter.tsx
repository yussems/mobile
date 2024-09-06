import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper';
import React from 'react'
import { useTheme } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';
import { customTheme } from '@/utils/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Filter() {
    return (
        <View style={{
            width: "100%",
        }}>
            <View style={[
                styles.container,
            ]}>
                <View style={{ alignItems: 'center', width: '50%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: customTheme.style.margin.medium }}>
                        <FontAwesome name="sort" size={24} color={customTheme.themes.colors.foreground.quaternary} />
                        <Text
                            style={{
                                color: customTheme.themes.colors.foreground.primary,
                                fontSize: customTheme.font.small,


                            }}>
                            Sırala
                        </Text>
                    </View>
                </View>
                <View style={{ width: 1, height: '100%', backgroundColor: customTheme.themes.colors.border.primary }}></View>
                <View style={{ alignItems: 'center', width: '50%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: customTheme.style.margin.medium }}>
                        <AntDesign name="filter" size={24} color={customTheme.themes.colors.foreground.quaternary} />
                        <Text style={{
                            color: customTheme.themes.colors.foreground.primary,
                            fontSize: customTheme.font.small,
                        }}>
                            Filtrele
                        </Text>
                    </View>
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
        borderWidth: 1,
        borderColor: customTheme.themes.colors.border.primary,
        borderRadius: customTheme.style.radius.medium
    },
});