import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Keith Mancuso',
    default:
      'Keith Mancuso - Engineering and Product Leader',
  },
  description:
    'I’m Keith, a engineer and product leader based in Berkeley, California.  I have a passion for mentoring teams, driving technical excellence, and delivering innovative solutions in software development that align with business goals.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-orange-50 dark:bg-black">
        <Providers>
          <Analytics />
          <SpeedInsights />
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
