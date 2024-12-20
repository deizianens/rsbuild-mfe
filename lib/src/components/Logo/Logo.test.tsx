import React from 'react'
import { render, screen } from '../../testUtils/customRender.utils'
import Logo from './Logo'

describe('Logo', () => {
  it('should render the Logo component', () => {
    render(<Logo variant="default" />)
    const logoElement = screen.getByTestId('logo-container')
    expect(logoElement).toBeInTheDocument()
  })
})
