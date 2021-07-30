import { ThemeOptions } from '@material-ui/core/styles'

export interface HomeProps {
theme: ThemeOptions
}

export interface ModalAddProps {
  theme: ThemeOptions
  modalHorticultural: CardHorticulturalProps
}

export interface CardCategoryProps {
  id: string
  name: string
  cardHorticulturies: [CardHorticulturalProps]
}

export interface CardHorticulturalProps {
  id: string
  name: string
  category: string
  shade?: string
  image: string
  description?: string
  average_price: number
  measurement: string
  benefits?: string
}
