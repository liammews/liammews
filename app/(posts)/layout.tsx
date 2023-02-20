import '../../styles/globals.css'
import { Inter } from "@next/font/google"
import localFont from '@next/font/local'

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
    <html lang="en" className={`${inter.variable} ${Gambetta_Variable.variable} ${Gambetta_VariableItalic.variable} bg-neutral-50 dark:bg-neutral-900 dark:text-white`}>
      <head />
      <body>
        <div className='max-w-xl px-3 mx-auto py-28 md:py-20'>
        {children}
        </div>
        </body>
    </html>
  )
}
