import { getAllTodos } from "@/services/todos";
import Filter from "@/shared/Filter";
import { useQuery } from "@tanstack/react-query";
import { FlatList, View } from "react-native";
import TodosList from "./components/TodosList";
import { ITodo } from "@/types/Todos";

export default function Index() {
  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: getAllTodos
  })
  return (
    <View>
      <Filter />
      <FlatList<ITodo>
        data={todosQuery?.data?.data}
        renderItem={({ item }) => <TodosList {...item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 13 }} />}
      />
    </View>
  );
}
