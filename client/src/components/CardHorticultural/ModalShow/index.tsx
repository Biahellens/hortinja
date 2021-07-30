import React from 'react';

import { CardHorticulturies, CardProps, CardHorticulturalProps } from '../interface'

//componentes
import {
  Button,
  CardActions,
  CardMedia,
  DialogContentText,
  Modal,
} from '@material-ui/core'

import { Card, Typography } from './style'

//image
import Background from '../../../assets/Images/Background_modal.png'

export const ModalShow = ({theme, cardHorticultural}:CardHorticulturies) => {
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
      </CardActions>
      <Modal open={open} onClose={handleClose} aria-labelledby="modalshow" style={{padding:'10vh', position:'absolute', justifyContent:'center'}}>
        <CardMedia id="modalshow" image={Background} style={{width:'40vh', height: '28vh', borderRadius: '2vh',  alignContent:'center'}}>
          <img src={cardHorticultural.image} style={{marginTop:'5vh', marginLeft: '2vh', height: '10vh', borderRadius: '5vh',}} />
          <Typography variant="h4">{cardHorticultural.name}</Typography>

          <Card style={{width: '30vh', padding:'2vh', position:'relative', marginTop:'5vh', marginLeft:'2.5vh', borderRadius: '2vh', backgroundColor:'#ffffff'}} >
            <DialogContentText>
                <Typography variant="h4">Tonalidade</Typography>
                <Typography>{cardHorticultural.shade}</Typography>

                <Typography variant="h4" style={{marginTop:'2vh'}}>Categoria</Typography>
                <Typography>---------</Typography>

                <Typography variant="h4" style={{marginTop:'2vh'}}>Benefícios Nutricionais</Typography>
                <Typography>{cardHorticultural.benefits}</Typography>

                <Typography variant="h4" style={{marginTop:'2vh'}}>Descrição</Typography>
                <Typography>{cardHorticultural.description}</Typography>

                <Typography variant="h4" style={{marginTop:'2vh'}}>Medida</Typography>
                <Typography>{cardHorticultural.measurement}</Typography>

                <Typography variant="h4" style={{marginTop:'2vh'}}>Preço Médio de Mercado</Typography>
                <Typography>{cardHorticultural.average_price}</Typography>
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
