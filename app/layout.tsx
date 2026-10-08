import type { Metadata } from 'next'
import '../styles/main.scss'

export const metadata: Metadata = {
  title: 'Yuvraj Upadhyay — Full Stack Developer',
  description: 'Full Stack Developer with 7+ years experience in Full-Stack Development and AI Integration, working with industry leaders to build exceptional products.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'AI Development', 'MERN Stack', 'Technical Lead'],
  openGraph: {
    title: 'Yuvraj Upadhyay — Full Stack Developer',
    description: 'Full Stack Developer focused on creating interactive digital experiences on the web.',
    url: 'https://yuvi76.github.io/',
    siteName: 'Yuvraj Upadhyay',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuvraj Upadhyay — Full Stack Developer',
    description: 'Full Stack Developer with 7+ years experience in Full-Stack Development and AI Integration.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon/favicon.ico`} />
      </head>
      <body className="loaded">
        {children}
      </body>
    </html>
  )
}
