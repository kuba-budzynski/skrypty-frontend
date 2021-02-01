import '../styles/globals.scss'
import "tailwindcss/tailwind.css";
import { ThemeProvider, theme } from '@chakra-ui/core';
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  }
})
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ReactNotification />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
