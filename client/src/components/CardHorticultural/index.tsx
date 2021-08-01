// dependencies
import React, { FC } from 'react'

import { CardHorticulturalProps } from './interface'

// componentes
import { Flex, Box } from 'reflexbox'
import {
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Typography,
} from '@material-ui/core'
import {} from './style'

// Modais
// import { ModalEdit } from './ModalEdit'

//icons
import Background from '../../assets/Images/Background_card.png'

export const CardHorticultural: FC<CardHorticulturalProps> = ({
  average_price,
  measurement,
  image,
  name,
  description,
}: CardHorticulturalProps) => {
  return (
    <Card
      style={{
        borderRadius: 25,
      }}
    >
      <CardContent
        style={{
          margin: 10,
          borderRadius: 25,
          backgroundImage: `url(${Background})`,
        }}
      >
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]}>
            <Avatar
              src={image}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </Box>
          <Box width={[1, 1 / 2]} justifyContent="center" height="auto">
            <Typography variant="h5">{name}</Typography>
          </Box>
        </Flex>
      </CardContent>

      <CardActionArea style={{ margin: 10, padding: 10 }}>
        <Flex flexWrap="wrap">
          <Box width={[1]}>{name}</Box>

          <Box width={[1]}>{description}</Box>
        </Flex>
      </CardActionArea>

      <CardContent>
        <Flex flexWrap="wrap">
          <Box width={[1 / 2]}>{description}</Box>
          <Box width={[1 / 4]}>{average_price}</Box>
          <Box width={[1 / 4]}>{measurement}</Box>
        </Flex>
      </CardContent>
    </Card>
  )
}
