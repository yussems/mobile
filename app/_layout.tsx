import theme from "@/utils/theme";
import { Slot, Stack, Tabs } from "expo-router";
import { PaperProvider } from "react-native-paper";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Tabs />
      </QueryClientProvider>
    </PaperProvider>
  );
}
