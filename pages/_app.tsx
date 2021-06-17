import '../styles/tailwind.css'
import 'dayjs/locale/th'

import React from 'react'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp