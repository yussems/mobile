import { getAllUsers } from "@/services/user";
import Filter from "@/shared/Filter";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import UserCard from "./components/UserCard";
import { UserInfo } from "@/types/user";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import UserBottomSheet from "./components/UserBottomSheet";

export default function Index() {
  const userQuery = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers
  })

  return (
    <>
      <SafeAreaView>
        <Filter />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 20 }}>
            <View style={{ gap: 18 }}>
              {
                userQuery?.data?.data?.map(
                  (user: UserInfo) => (
                    <View
                      key={user.id}
                    >
                      <UserCard
                        {...user}
                      />
                    </View>
                  )
                )
              }
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>

  );
}
