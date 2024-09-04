import { getAllUsers } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  // query for users
  const [query, setQuery] = useState()


  const userQuery = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers
  })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit asdthis screen.</Text>
    </View>
  );
}
