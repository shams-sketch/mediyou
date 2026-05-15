import '../styles/tokens.css'
import '../styles/globals.css'

export const metadata = {
  title: 'MediYou — Aap Ki Sehat Ka Naya Sathi',
  description: 'MediYou connects you to Pune and Delhi\'s top specialist surgeons. Free consultations, cashless insurance, and care at every step.',
  keywords: 'surgery, specialist, Pune, Delhi, cashless insurance, piles, hernia, weight loss, bariatric',
  openGraph: {
    title: 'MediYou — Aap Ki Sehat Ka Naya Sathi',
    description: 'Free consultations, cashless insurance, and care at every step.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
