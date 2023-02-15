import { Dancing_Script, Inter, Poppins } from '@next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ['300', '400', '500', '600', '700']
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: "--font-dancing",
  weight: ['400', '700']
})
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${dancingScript.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}