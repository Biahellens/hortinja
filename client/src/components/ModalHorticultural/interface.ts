export interface ModalProps {
  id?: string
  name?: string
  category?: string
  shade?: string
  image?: string
  description?: string
  average_price?: number
  measurement?: string
  benefits?: string

  open?: boolean
  isEdit?: boolean
  newResource?: boolean
  handleClose?: () => void
}
