/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import theme from '../../../theme'
type Kind = 'primary' | 'secondary' | 'invisible'
type Size = 'small' | 'medium' | 'large'

type Props = {
  /** Type of button */
  kind?: Kind,
  /** Label of button */
  children: string,
  /** onClick handler  */
  onClick?: () => void,
  /** Size of button */
  size?: Size,
  /** Dropshadow */
  hasDropShadow?: boolean
}

interface IStyle {
  theme?: typeof theme
}

/** Button component */
const StyledButton = styled.button<Props & IStyle>(
({ theme, kind, hasDropShadow, size }) => css`
  
  ${
  kind === 'invisible'
    ? `
    background-color: transparent;
    color: ${theme.color.Crimson};
  `
    : kind === 'secondary'
      ? `
        background-color: ${theme.color.LightCrimson};
        color: ${theme.color.White};
      `
      : `
        background-color: ${theme.color.White};
        color: ${theme.color.Crimson};
      `
}
  ${hasDropShadow && `box-shadow: ${theme.boxShadow.Button};`}

  font-family: ${theme.fontFamily.Ropa};
  ${
  size === 'large'
    ? `
    padding: 0.7rem 1.5rem;
    font-size: ${theme.fontSize.Large};
  `
    : size === 'small'
      ? `
        padding: 0.5rem 1rem;
        font-size: ${theme.fontSize.Small};
      `
      : `
        padding: 0.5rem 1.2rem;
        font-size: ${theme.fontSize.Medium};
      `
}  
  border-radius: ${theme.borderRadius.Medium};
  border: 0 solid transparent;
  cursor: pointer;
  
  :hover{
    ${
  kind === 'secondary'
    ? `
        background-color: ${theme.color.Crimson};
      `
    : `
        background-color: ${theme.color.LightestGray};
      `
}
  }

`

)

const Button = (props: Props) => <StyledButton {...props} />

Button.defaultProps = {
  kind: 'primary',
  size: 'small',
  hasDropShadow: false
}

export default Button
