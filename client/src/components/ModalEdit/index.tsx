import React from 'react';

//componentes
import {
  Button,
  CardActions,
  CardMedia,
  DialogContentText,
  IconButton,
  Modal,
} from '@material-ui/core'

import { Card, Typography } from './style'

  //image
import Background from '../../../assets/Images/Background_modal.png'
import alface from '../../../assets/Images/alface.png'

//icon
import EditIcon from '@material-ui/icons/Edit'

export const ModalEdit = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CardActions onClick={handleClickOpen}>
        <IconButton aria-label="edit" size='small'>
            <EditIcon />
        </IconButton>
      </CardActions>
      <Modal open={open} onClose={handleClose} aria-labelledby="modalshow" style={{padding:'10vh', position:'absolute', justifyContent:'center'}}>
        <CardMedia id="modalshow" image={Background} style={{width:'40vh', height: '28vh', borderRadius: '2vh',  alignContent:'center'}}>
          <img src={alface} style={{marginTop:'5vh', marginLeft: '2vh', height: '10vh', borderRadius: '5vh',}} />

          <Card style={{width: '30vh', padding:'2vh', position:'relative', marginTop:'5vh', marginLeft:'2.5vh', borderRadius: '2vh', backgroundColor:'#ffffff'}} >
            <DialogContentText>
                <Typography variant="h4">Tonalidade</Typography>
                <Typography>Número de registros da Horta</Typography>

                <Typography variant="h4" style={{marginTop:'2vh'}}>Categoria</Typography>
                <Typography>-------------</Typography>

                <Typography variant="h4" style={{marginTop:'2vh'}}>Benefícios Nutricionais</Typography>
                <Typography>-------------</Typography>

                <Typography variant="h4" style={{marginTop:'2vh'}}>Descrição</Typography>
                <Typography>-------------</Typography>

                <Typography variant="h4" style={{marginTop:'2vh'}}>Medida</Typography>
                <Typography>-------------</Typography>

                <Typography variant="h4" style={{marginTop:'2vh'}}>Preço Médio de Mercado</Typography>
                <Typography>-------------</Typography>
            </DialogContentText>
            </Card>

            <Button onClick={handleClose} style={{marginLeft: '12vh', marginTop:'5vh', width:'12vh', height:'4vh', color:"#FFFF", backgroundColor:'#111111', borderRadius:'2vh'}}>
              Fechar
            </Button>
          </CardMedia>
      </Modal>
    </div>
  );
}
