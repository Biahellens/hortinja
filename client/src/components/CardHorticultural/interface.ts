import { ThemeOptions } from '@material-ui/core/styles'

import {
  CardProps as CardPropsMI,
  TypographyProps as TypographyPropsMI
} from '@material-ui/core'

export type CardProps = CardPropsMI & {
  theme: ThemeOptions
}

export type TypographyProps = TypographyPropsMI & {
  theme: ThemeOptions
}

export {}
