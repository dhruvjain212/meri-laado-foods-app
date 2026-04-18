import type { Metadata } from 'next'
import { Nunito, Playfair_Display } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Meri Laado Foods – Homemade Maternity Nutrition',
  description:
    'Premium homemade nutrition for mothers-to-be and new moms. 100% natural laddoos, panjeeri, gud bars & desi ghee. Made fresh daily with love and care.',
  keywords: [
    'maternity nutrition India',
    'homemade laddoo for pregnant women',
    'panjeeri',
    'gud bars',
    'desi ghee',
    'no preservatives',
    'new mother food',
  ],
  openGraph: {
    title: 'Meri Laado Foods – Care in Every Bite',
    description:
      'Homemade with love, specially crafted for mothers and their little ones.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
