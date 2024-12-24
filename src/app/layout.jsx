import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Yug Gupta',
    default:
      'Yug Gupta - Founder, Software Engineer, and Entrepreneur',
  },
  favicon: '/favicon.jpg',
  description:
    'I’m Yug Gupta, a software designer and entrepreneur based in Gwalior City. I’m currently building BuildPost',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
