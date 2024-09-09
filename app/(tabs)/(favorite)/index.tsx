import { FlatList, StyleSheet, Text, View } from 'react-native'
import { observer } from 'mobx-react';
import favoritesStore from '@/context/store'
import FavoriteList from './components/FavoriteList';
import { UserInfo } from '@/types/user';
import { useEffect } from 'react';
import { Button } from 'react-native-paper';


const Favorite = observer(() => {

    return (
        <View style={{ height: '100%' }}>
            {
                favoritesStore.favorites.length === 0 ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>No favorites found</Text>
                    </View>
                    :
                    <>
                        <View
                            style={{ marginBottom: 20 }}
                        >
                            <Button mode='contained' onPress={() => favoritesStore.clearFavorites()}>Clear</Button>
                        </View>


                        <FlatList<UserInfo>
                            data={favoritesStore.favorites}
                            renderItem={({ item }) => <FavoriteList {...item} />}
                            keyExtractor={item => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={() => <View style={{ height: 13 }} />}
                        />
                    </>
            }
        </View>
    )
})

export default Favorite;

const styles = StyleSheet.create({})