import { Slot } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';


export default function UserLayout() {
    const theme = useTheme()
    return (
        <View style={{ backgroundColor: theme.colors.surface, }}>
            <View style={{ marginBottom: 20 }} />
            <View style={{ marginHorizontal: 20, }}>
                <Slot />
            </View>
        </View>
    );
}