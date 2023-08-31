import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import { ClerkProvider, currentUser } from '@clerk/nextjs'
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import ThemeProvider from '@/Providers/ThemeProvider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser();
  return (
     <ClerkProvider>
      <html lang="en" className={cn(inter.className, "light")} style={{
        colorScheme : 'light'
      }}>
        <body>
          
          <ThemeProvider>
            <div className='flex flex-col min-h-screen w-full items-center dark:bg-black'>
              {
                user && (
                  <>
                  <Navbar />
                  <Separator />
                  </>
                )
              }
              <main className='flex flex-grow w-full justify-center dark:bg-neutral-950 items-center '>
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
