import React from 'react'
import { ILogoProps } from './Logo.types'
import { LogoContainer } from './Logo.styles'
import { ReactComponent as CLogo } from '../../../assets/logos/cLogo.svg'
import { ReactComponent as SLogo } from '../../../assets/logos/sLogo.svg'
import { ReactComponent as PLogo } from '../../../assets/logos/pLogo.svg'

const Logo = ({ variant = 's', width, ...props }: ILogoProps) => {
  const logoComponents = {
    c: <CLogo data-testid="c-logo" />,
    s: <SLogo data-testid="s-logo" />,
    p: <PLogo data-testid="p-logo" />,
    default: <SLogo data-testid="s-logo" />,
  }

  return (
    <LogoContainer
      data-testid="logo-container"
      variant={variant}
      width={width}
      {...props}
    >
      {logoComponents[variant] || logoComponents.default}
    </LogoContainer>
  )
}

export default Logo
