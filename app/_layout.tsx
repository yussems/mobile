import { Slot, Stack, Tabs } from "expo-router";
import { PaperProvider } from "react-native-paper";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { theme } from "@/utils/theme";
const queryClient = new QueryClient()
export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Stack >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </PaperProvider>
  );
}
