import { CardHorticulturalProps } from '../../components/CardHorticultural/interface'

export interface CategoryProps {
  id: string
  name: string
  cardHorticulturies: [CardHorticulturalProps]
}
