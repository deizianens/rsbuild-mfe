import React from 'react'
import { DecoratorFn } from '@storybook/react'
import { ThemeProvider } from '../src/providers/ThemeProvider'
import { defaultTheme } from '../src/themes'
import '../src/styles/global.css'

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme

  const storyTheme = {
    defaultTheme: defaultTheme,
  }

  return (
    <ThemeProvider appTheme={storyTheme[theme]}>
      <StoryFn />
    </ThemeProvider>
  )
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'defaultTheme',
    toolbar: {
      items: [{ value: 'defaultTheme', title: 'Default' }],

      showName: true,
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Documentation', 'Atoms', 'Molecules', 'Organisms'],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [withTheme]
