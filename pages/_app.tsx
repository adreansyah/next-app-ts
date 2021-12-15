import 'styles/globals.css'
import "scss/custom.scss"
import type { AppProps } from 'next/app'
import Components from 'layouts'
function MyApp({ Component, pageProps }: AppProps) {
  return <Components Layouts={<Component {...pageProps} />} />
}

export default MyApp
