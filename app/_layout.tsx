
import { useEffect } from 'react';
import { Stack, SplashScreen } from "expo-router";
import { useFonts } from 'expo-font';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import colors from "../constants/colors";
export { ErrorBoundary } from "expo-router";

const client = new QueryClient();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        Varela: require('../assets/fonts/VarelaRound-Regular.ttf'),
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    return (
        <>
        {!loaded && <SplashScreen />}
        {loaded && <RootLayoutNav />}
        </>
    );
};


function RootLayoutNav() {
    return (
        <QueryClientProvider client={client}>
            <Stack screenOptions={{ contentStyle: { backgroundColor: colors.medium, paddingHorizontal: 10 } }}>
                <Stack.Screen name="index" options={{ title: '/r/all/hot' }} />
                <Stack.Screen name="[...post]" options={{ title: 'Post' }} />
            </Stack>
        </QueryClientProvider>
    );
};
  