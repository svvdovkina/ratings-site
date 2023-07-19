import Head from 'next/head'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Noto_Sans } from 'next/font/google'

const noto_sans = Noto_Sans({
  weight: ['300', '400', '500','700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Ratings</title>
      <meta name="description" content="Site with ratings" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={noto_sans.className}>
      <Component {...pageProps} />
    </main>
   
  </>
}
