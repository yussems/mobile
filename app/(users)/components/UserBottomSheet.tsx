import { View, Text, StyleSheet } from 'react-native';

function UserBottomSheet() {
    return (
        <View style={styles.container}>
            <Text>UserBottom</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    contentContainer: {
        alignItems: 'center',
    },
});

export default UserBottomSheet