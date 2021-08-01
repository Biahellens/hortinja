// dependencies
import React, { FC } from 'react'

//componentes
import { CardMedia, IconButton } from '@material-ui/core'
import { Flex } from 'reflexbox'
import { Card, Typography } from './style'

//icons
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp'
import AttachMoneySharpIcon from '@material-ui/icons/AttachMoneySharp'

//image
import Background from '../../assets/Images/Background_infos.png'

export const CardInfo: FC<any> = () => {
  return (
    <Flex justifyContent="center">
      <CardMedia
        image={Background}
        style={{
          maxWidth: '80vh',
          height: '15vh',
          borderRadius: '2vh',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          style={{
            width: '30vh',
            padding: '2vh',
            position: 'relative',
            marginTop: '10vh',
            // marginRight: '2vh',
            borderRadius: '2vh',
            backgroundColor: '#ffffffb9',
          }}
        >
          <Typography variant="h4">Registros</Typography>
          <Typography>Número de registros da Horta</Typography>

          <IconButton>
            <AssignmentSharpIcon fontSize="large" color="primary" />
            <Typography
              variant="h5"
              color="textPrimary"
              style={{ marginLeft: '2vh' }}
            >
              444
            </Typography>
          </IconButton>
        </Card>

        <Card
          style={{
            width: '30vh',
            padding: '2vh',
            position: 'relative',
            marginTop: '10vh',
            marginLeft: '2vh',
            borderRadius: '2vh',
            backgroundColor: '#ffffffb9',
          }}
        >
          <Typography variant="h4">Registros</Typography>
          <Typography>Número de registros da Horta</Typography>

          <IconButton>
            <AttachMoneySharpIcon fontSize="large" color="primary" />
            <Typography
              variant="h5"
              color="textPrimary"
              style={{ marginLeft: '2vh' }}
            >
              R$ 1024,00
            </Typography>
          </IconButton>
        </Card>
      </CardMedia>
    </Flex>
  )
}
