import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { onCLS, onFCP, onLCP } from 'web-vitals'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    onCLS(console.log)
    onFCP(console.log)
    onLCP(console.log)
  }, [])

  return (
    <>
      <Head>
        <title>Kin Home</title>
      </Head>
      <Analytics/>
        <Component {...pageProps} />
    </>
  )
}
