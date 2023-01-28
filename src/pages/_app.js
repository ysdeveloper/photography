import { Inter, Poppins } from '@next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ['300', '400', '500', '600', '700']
});
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}