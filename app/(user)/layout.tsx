import '../../styles/globals.css'
import { Inter } from "@next/font/google"
import localFont from '@next/font/local'
import { ServerThemeProvider } from 'next-themes';
import Providers from "../../components/Providers";

const inter = Inter({
  variable: '--font-inter',
  display: 'optional'
});

// Font files can be colocated inside of `app`
const Gambetta_Variable = localFont({
  src: '../../public/Gambetta-Variable.ttf',
  variable: '--font-gambetta',
  // default, can also use "swap" to ensure custom font always shows
  display: 'optional'
});

const Gambetta_VariableItalic = localFont({
  src: '../../public/Gambetta-VariableItalic.ttf',
  variable: '--font-gambetta-italic',
  // default, can also use "swap" to ensure custom font always shows
  display: 'optional'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServerThemeProvider attribute="class">
    <html lang="en" className={`${inter.variable} ${Gambetta_Variable.variable} ${Gambetta_VariableItalic.variable} bg-background`}>
      <head />
      <body>
        <Providers>
        <div className='max-w-[39rem] px-2 py-28 md:py-20 mx-auto'>
        {children}
        </div>
        </Providers>
        </body>
    </html>
    </ServerThemeProvider>
  )
}
