// dependencies
import React from 'react'

//componentes
import { CardActions, CardActionArea, CardContent, CardMedia, IconButton } from '@material-ui/core'
import { Card, Typography } from './style'

//Modais
import { ModalShow } from './ModalShow'

//icons
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

//image
import Background from '../../assets/Images/Background_card.png'
import alface from '../../assets/Images/alface.png'


export const CardHorticultural = () => {
  const [modalShow] = React.useState(ModalShow);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (

    <Card style={{maxHeight: '42vh', width: '34vh'}}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia  image={Background} style={{margin: '1vh', maxWidth:'94%', height: '15vh', borderRadius: '2vh',}}>
          <img src={alface} style={{margin: '2vh', height: '10vh', borderRadius: '5vh',}} />
          <Typography variant="h6" color='secondary'>Alface</Typography>
        </CardMedia>

        <CardContent>

          <Typography>A alface crespa é uma hortaliça folhosa muito popular entre os brasileiros. Costuma ser consumida crua, geralmente em saladas</Typography>
        </CardContent>
      </CardActionArea>

      <CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="delete" color='primary' size='small'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="edit" size='small'>
            <EditIcon />
          </IconButton>

          <Typography style={{marginLeft: 'auto'}}><b>Média</b> R$ 1.99</Typography>
          </CardActions>
        </CardContent>
    </Card>
  );
}
