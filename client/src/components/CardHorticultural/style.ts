// dependencies
import styled from 'styled-components'

// componentes
import { Flex, Box } from 'reflexbox'

// interfaces
import { BoxProps } from 'reflexbox'

import {
  Card as CardMI,
  Typography as TypographyMI
} from '@material-ui/core'

import { CardProps, TypographyProps } from './interface'

export const CardImage = styled.div`
  height: '140vh';
`
export const Card = styled(CardMI)<CardProps>`
  align-items: center;
`

export const Typography = styled(TypographyMI)<TypographyProps>`
  text-align: justify;
`
