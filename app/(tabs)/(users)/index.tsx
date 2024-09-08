import { getAllUsers } from "@/services/user";
import Filter from "@/shared/Filter";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import UserCard from "./components/UserCard";
import { UserInfo } from "@/types/user";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import UserBottomSheet from "./components/UserBottomSheet";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false)
  const [userId, setUserId] = useState('')

  const userQuery = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers
  })
  const handleOpenSheet = (id: string) => {
    setUserId(id)
    setModalVisible(!modalVisible)
  }

  return (
    <>
      <SafeAreaView>
        <Filter />
        <UserBottomSheet
          userId={userId}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible} />
        <View style={{ marginTop: 20 }}>
          <View style={{ gap: 18 }}>
            <FlatList<UserInfo>
              data={userQuery?.data?.data}
              renderItem={({ item }) => <UserCard handleOpenSheet={(id) => handleOpenSheet(id)} {...item} />}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ height: 13 }} />}
            />
          </View>
        </View>
      </SafeAreaView>
    </>

  );
}
