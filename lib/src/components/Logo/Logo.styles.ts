import styled from 'styled-components'
import { ILogoProps } from './Logo.types'

const LogoContainer = styled.div<ILogoProps>`
  svg {
    width: ${(props) => props.width}px;
  }
`

export { LogoContainer }
