import { getUser } from '@/services/user';
import { useQuery } from '@tanstack/react-query';
import { View, StyleSheet, Modal, Alert, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Divider, Icon, Text } from 'react-native-paper';

function UserBottomSheet({ modalVisible, setModalVisible, userId }: { modalVisible: boolean, setModalVisible: any, userId: string }) {
    const userQuery = useQuery({
        queryKey: ['user', userId],
        queryFn: () => getUser(userId),
        enabled: !!userId
    })
    const user = userQuery?.data?.data

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.container}>
                {userQuery.isLoading && <ActivityIndicator animating={true} color={'blue'} />}
                <View style={styles.subContainer}>
                    <View style={{ alignItems: 'flex-end', }}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Icon
                                source="close"
                                color={'black'}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>{user?.name}</Text>
                    </View>
                    <View style={{ paddingHorizontal: 12, paddingVertical: 13, }}>
                        <View style={{ gap: 12 }}>
                            <View style={{ flexDirection: 'row', gap: 12 }}>
                                <Icon
                                    source="google-maps"
                                    color={'black'}
                                    size={20}
                                />
                                <Text>Konum</Text>
                            </View>
                            <Text>{user?.address?.street} {user?.address?.city}</Text>
                            <Divider />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 12, paddingVertical: 13, }}>
                        <View style={{ gap: 12 }}>
                            <View style={{ flexDirection: 'row', gap: 12 }}>
                                <Icon
                                    source="office-building-outline"
                                    color={'black'}
                                    size={20}
                                />
                                <Text>Firma</Text>
                            </View>
                            <Text>{user?.company?.name}</Text>
                            <Divider />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 12, paddingVertical: 13, }}>
                        <View style={{ gap: 12 }}>
                            <View style={{ flexDirection: 'row', gap: 12 }}>
                                <Icon
                                    source="web-check"
                                    color={'black'}
                                    size={20}
                                />
                                <Text>Website</Text>
                            </View>
                            <Text>{user?.website}</Text>
                            <Divider />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    subContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '40%',
        padding: 20,
        borderRadius: 10
    }

});

export default UserBottomSheet