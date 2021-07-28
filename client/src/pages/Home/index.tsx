//dependencias'
import React from 'react';

//componentes
import { Typography } from '@material-ui/core'
import { Container ,Wrapper } from './style'

import { CardHorticultural, CardInfo, ToolbarHome } from '../../components'

export const Home = () => {
  return (
    <Wrapper>
      <Container>
        <ToolbarHome/>
      </Container>
      <Container width={[1]} m={['10vh']} alignItems='center' style={{padding:'10vh' ,borderBottom:'solid #aaaaaa	', border: '4vh',}}>
        <CardInfo />
      </Container>
      <Container width={[1]} ml={4} >
        <Container width={[1, 1/4]} m={2} style={{padding:'4vh' ,borderBottom:'solid #aaaaaa	', border: '4vh',}}>
         <Typography variant="h3">Verduras</Typography>
            <CardHorticultural/>
            <CardHorticultural/>
        </Container>
        </Container>
    </Wrapper>
  );
}
