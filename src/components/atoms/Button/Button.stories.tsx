import React from 'react'
import Button from './Button'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

const group = 'GROUP-BUTTON'

const kindOptions: Kind[] = ['primary', 'secondary', 'invisible']
const kindDefault = 'primary'

type Kind = 'primary' | 'secondary' | 'invisible'
type Size = 'small' | 'medium' | 'large'

const sizeOptions: Size[] = ['small', 'medium', 'large']
const sizeDefault: Size = 'medium'

const dropShadowOptions = ['false', 'true']
const dropShadowDefault = 'false'

storiesOf('Atoms', module).add('Button', () => {
  const kind: Kind = select('Kind', kindOptions, kindDefault, group)
  const label = text('Label', 'button', group)
  const size = select('Size', sizeOptions, sizeDefault, group)
  const hasDropShadow = select(
    'hasDropShadow',
    dropShadowOptions,
    dropShadowDefault,
    group
  )
  return (
    <Button
      kind={ kind }
      size={ size }
      hasDropShadow={ !!hasDropShadow }
    >
      {label}
    </Button>
  )
})
