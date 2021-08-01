import React, { FC } from 'react'

// components
import { Flex, Box } from 'reflexbox'
import { DialogContentText, Typography, Button } from '@material-ui/core'

// interface
import { ModalProps } from '../../interface'

export const HeaderShow: FC<ModalProps> = ({ image, name }: ModalProps) => {
  return (
    <Flex flexWrap="wrap">
      <Box width={[1 / 2]}>
        <img
          src={image}
          style={{
            marginTop: 30,
            height: 100,
            marginLeft: 20,
            borderRadius: 50,
          }}
        />
      </Box>
      <Box width={[1 / 2]} mt={[55]}>
        <Typography variant="h3" color="secondary">
          {name}
        </Typography>
      </Box>
    </Flex>
  )
}

export const ContentShow: FC<ModalProps> = ({
  shade,
  category,
  benefits,
  description,
  measurement,
  average_price,
}: ModalProps) => {
  return (
    <>
      <DialogContentText>
        <Typography variant="h5" color="textPrimary">
          Tonalidade
        </Typography>
        <Typography>{shade}</Typography>

        <Typography
          variant="h5"
          style={{ marginTop: '2vh' }}
          color="textPrimary"
        >
          Categoria
        </Typography>
        <Typography>{category}</Typography>

        <Typography
          variant="h5"
          style={{ marginTop: '2vh' }}
          color="textPrimary"
        >
          Benefícios Nutricionais
        </Typography>
        <Typography>{benefits}</Typography>

        <Typography
          variant="h5"
          style={{ marginTop: '2vh' }}
          color="textPrimary"
        >
          Descrição
        </Typography>
        <Typography>{description}</Typography>

        <Typography
          variant="h5"
          style={{ marginTop: '2vh' }}
          color="textPrimary"
        >
          Medida
        </Typography>
        <Typography>{measurement}</Typography>

        <Typography
          variant="h5"
          style={{ marginTop: '2vh' }}
          color="textPrimary"
        >
          Preço Médio de Mercado
        </Typography>
        <Typography>{average_price}</Typography>
      </DialogContentText>
    </>
  )
}

export const FooterShow: FC<ModalProps> = ({ handleClose }: ModalProps) => {
  return (
    <Flex justifyContent="center" mt={[20]}>
      <Button
        onClick={handleClose}
        style={{
          width: '12vh',
          height: '4vh',
          color: '#FFFF',
          backgroundColor: '#111111',
          borderRadius: '2vh',
        }}
      >
        Fechar
      </Button>
    </Flex>
  )
}
