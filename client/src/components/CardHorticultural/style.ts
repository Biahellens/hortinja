// dependencies
import styled from 'styled-components'

// componentes
import {
  Card as CardMI,
  Typography as TypographyMI,
  CardContent as CardContentMI,
} from '@material-ui/core'

// interfaces
import { CardProps, TypographyProps, CardContentProps } from '@material-ui/core'

import Background from '../../assets/Images/Background_card.png'

export const CardImage = styled.div`
  height: '140vh';
`
export const Card = styled(CardMI)<CardProps>``

export const Typography = styled(TypographyMI)<TypographyProps>`
  text-align: justify;
`

export const CardContent = styled(CardContentMI)<CardContentProps>`
  background-image: url(${Background});
  padding: 25;
`
