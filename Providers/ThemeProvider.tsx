'use client'

import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

type props = {
  children: React.ReactNode
}

const ThemeProvider = ({children} : props ) => {
  return (
    <NextThemeProvider attribute='class' enableSystem>
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider