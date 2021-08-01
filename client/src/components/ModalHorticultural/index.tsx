import React, { FC, useEffect, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

// interfaces
import { ModalProps } from './interface'

//componentes
import { Modal } from '@material-ui/core'
import { Flex } from 'reflexbox'
import { Card } from './style'
import { HeaderShow, ContentShow, FooterShow } from './content/Show'
import {
  HeaderModified,
  ContentModified,
  FooterModified,
} from './content/Modified'

// image
import Background from '../../assets/Images/Background_modal.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      borderRadius: 20,
    },
  })
)

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

export const ModalHorticultural: FC<ModalProps> = ({
  isEdit = false,
  newResource = false,
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
  const [modalStyle] = useState(getModalStyle)
  const classes = useStyles()
  const [showMode, setShowMode] = useState(true)

  useEffect(() => {
    if (open && (isEdit || newResource)) {
      setShowMode(false)
    }
  }, [open])

  return (
    <Modal id={id} open={open} onClose={handleClose} aria-labelledby="modal">
      <div style={modalStyle} className={classes.paper}>
        <Flex
          style={{
            backgroundImage: `url(${Background})`,
            height: 150,
            borderRadius: 20,
          }}
        >
          {showMode ? (
            <HeaderShow image={image} name={name} />
          ) : (
            <HeaderModified id={id} />
          )}
        </Flex>

        <Flex style={{ justifyContent: 'center' }} mt={[10]} mx={[25]}>
          <Card
            style={{
              padding: 15,
              width: '100%',
              borderRadius: 10,
              backgroundColor: '#ffffff',
            }}
          >
            {showMode ? (
              <ContentShow
                average_price={average_price}
                benefits={benefits}
                category={category}
                description={description}
                name={name}
                shade={shade}
                measurement={measurement}
              />
            ) : (
              <ContentModified id={id} />
            )}
          </Card>
        </Flex>

        {showMode ? (
          <FooterShow handleClose={handleClose} />
        ) : (
          <FooterModified id={id} handleClose={handleClose} />
        )}
      </div>
    </Modal>
  )
}
