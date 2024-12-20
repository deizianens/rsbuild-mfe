import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '../providers/ThemeProvider'

const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender: any = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
