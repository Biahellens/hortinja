// dependencies
import React, { FC, useState } from 'react'

import { CardHorticulturalProps } from './interface'

// componentes
import { Flex, Box } from 'reflexbox'
import {
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Typography,
  IconButton,
} from '@material-ui/core'

// Modais
import { ModalHorticultural } from '../ModalHorticultural'

//imgs
import Background from '../../assets/Images/Background_card.png'

//icons
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

export const CardHorticultural: FC<CardHorticulturalProps> = ({
  average_price,
  measurement,
  image,
  name,
  description,
  category,
  id,
}: CardHorticulturalProps) => {
  const [statusModal, setStateModal] = useState(false)
  const [editMode, setEditMode] = useState(false)

  function closeModal(): void {
    setStateModal(false)
    setEditMode(false)
  }

  function openModalEdit() {
    setEditMode(true)
    setStateModal(true)
  }

  return (
    <>
      <Card
        style={{
          borderRadius: 25,
          width: 320,
        }}
      >
        <CardContent
          style={{
            backgroundImage: `url(${Background})`,
            padding: 25,
            margin: 10,
            borderRadius: 25,
          }}
        >
          <Flex flexWrap="wrap">
            <Box width={[1, 1 / 3]}>
              <Avatar
                src={image}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </Box>
            <Box width={[1, 1 / 2]} justifyContent="center" height="auto">
              <Typography variant="h4" color="secondary">
                {name}
              </Typography>
            </Box>
          </Flex>
        </CardContent>

        <CardActionArea style={{ margin: 10, padding: 10 }}>
          <Flex flexWrap="wrap" onClick={() => setStateModal(true)}>
            <Box width={[1]}>
              <Typography variant="h5"> {name} </Typography>
            </Box>

            <Box width={[1]}>
              <Typography variant="body1"> {description} </Typography>
            </Box>
          </Flex>
        </CardActionArea>

        <CardContent>
          <Flex flexWrap="wrap">
            <Box width={[1 / 2]}>
              <IconButton>
                <DeleteIcon fontSize="medium" color="error" />
              </IconButton>
              <IconButton onClick={() => openModalEdit()}>
                <EditIcon fontSize="medium" color="primary" />
              </IconButton>
            </Box>
            <Box width={[1 / 4]}>
              <Typography variant="h5" color="primary">
                {average_price}
              </Typography>
            </Box>
            <Box width={[1 / 4]}>
              <Typography variant="h6"> {measurement} </Typography>
            </Box>
          </Flex>
        </CardContent>
      </Card>

      <ModalHorticultural
        isEdit={editMode}
        open={statusModal}
        handleClose={closeModal}
        average_price={average_price}
        measurement={measurement}
        image={image}
        name={name}
        description={description}
        category={category}
        id={id}
      />
    </>
  )
}
