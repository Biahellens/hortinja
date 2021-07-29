import { ThemeOptions } from '@material-ui/core/styles'

import {
  CardProps as CardPropsMI,
  CardContentProps as CardContentPropsMI,
  TypographyProps as TypographyPropsMI
} from '@material-ui/core'

export type CardProps = CardPropsMI & {
  theme: ThemeOptions
}

export type CardContentProps = CardContentPropsMI & {
  theme: ThemeOptions
}

export type TypographyProps = TypographyPropsMI & {
  theme: ThemeOptions
}

export {}
