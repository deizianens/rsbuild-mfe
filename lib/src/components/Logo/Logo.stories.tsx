import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ILogoProps } from './Logo.types'
import Logo from './Logo'

export default {
  title: 'Atoms/Logo/Stories',
  component: Logo,
} as Meta

const Template: Story<ILogoProps> = (args) => (
  <div
    style={{
      width: 500,
      height: 'auto',
      backgroundColor: 'white',
    }}
  >
    <Logo {...args} />
  </div>
)

export const Default: Story<ILogoProps> = Template.bind({})
Default.args = {
  variant: 's',
}
