import React, { FC, useEffect, useState } from 'react'

// interfaces
import { ModalProps } from './interface'

//componentes
import { Button, CardMedia, DialogContentText, Modal } from '@material-ui/core'
import { Card, Typography } from './style'

// image
import Background from '../../assets/Images/Background_modal.png'

export const ModalHorticultural: FC<ModalProps> = ({
  isEdit = false,
  average_price,
  category,
  id,
  image,
  measurement,
  name,
  benefits,
  description,
  shade,
  open = false,
  handleClose,
}: ModalProps) => {
  const [showMode, setShowMode] = useState(true)
  const [newResource, setNewResource] = useState(true)

  useEffect(() => {
    if (open && isEdit) {
      setShowMode(false)
    }

    if (id) {
      setNewResource(false)
    }
  }, [open])

  return (
    <Modal
      id={id}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal"
      style={{
        padding: '10vh',
        position: 'absolute',
        justifyContent: 'center',
      }}
    >
      <CardMedia
        id="modal"
        image={Background}
        style={{
          width: '40vh',
          height: '28vh',
          borderRadius: '2vh',
          alignContent: 'center',
        }}
      >
        <img
          src={image}
          style={{
            marginTop: '5vh',
            marginLeft: '2vh',
            height: '10vh',
            borderRadius: '5vh',
          }}
        />
        <Typography variant="h4">{name}</Typography>

        <Card
          style={{
            width: '30vh',
            padding: '2vh',
            position: 'relative',
            marginTop: '5vh',
            marginLeft: '2.5vh',
            borderRadius: '2vh',
            backgroundColor: '#ffffff',
          }}
        >
          <DialogContentText>
            <Typography variant="h4">Tonalidade</Typography>
            <Typography>{shade}</Typography>

            <Typography variant="h4" style={{ marginTop: '2vh' }}>
              Categoria
            </Typography>
            <Typography>---------</Typography>

            <Typography variant="h4" style={{ marginTop: '2vh' }}>
              Benefícios Nutricionais
            </Typography>
            <Typography>{benefits}</Typography>

            <Typography variant="h4" style={{ marginTop: '2vh' }}>
              Descrição
            </Typography>
            <Typography>{description}</Typography>

            <Typography variant="h4" style={{ marginTop: '2vh' }}>
              Medida
            </Typography>
            <Typography>{measurement}</Typography>

            <Typography variant="h4" style={{ marginTop: '2vh' }}>
              Preço Médio de Mercado
            </Typography>
            <Typography>{average_price}</Typography>
          </DialogContentText>
        </Card>

        <Button
          onClick={() => handleClose}
          style={{
            marginLeft: '12vh',
            marginTop: '5vh',
            width: '12vh',
            height: '4vh',
            color: '#FFFF',
            backgroundColor: '#111111',
            borderRadius: '2vh',
          }}
        >
          Fechar
        </Button>
      </CardMedia>
    </Modal>
  )
}
