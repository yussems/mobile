import { getAllTodos } from "@/services/todos";
import Filter from "@/shared/Filter";
import { useQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";

export default function Index() {
  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: getAllTodos
  })
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Filter />
      <Text>Edit app/index.tsx to edit asdthis screen.</Text>
    </View>
  );
}
