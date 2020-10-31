import '../styles/globals.scss'
import { ThemeProvider } from "@chakra-ui/core";
import 'react-vertical-timeline-component/style.min.css';
import '@brainhubeu/react-carousel/lib/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
