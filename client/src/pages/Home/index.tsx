//dependencias'
import React, { useState } from 'react'

import {
  HomeProps,
  CardCategoryProps,
  CardHorticulturalProps,
  ModalAddProps,
} from './interface'

//componentes
import { Button, Divider, IconButton, Typography } from '@material-ui/core'

import { CardHorticultural, CardInfo, ToolbarHome } from '../../components'

import { Container, Wrapper } from './style'

//icone
import AddIcon from '@material-ui/icons/Add'

export const Home = (
  { theme }: HomeProps,
  { modalHorticultural }: ModalAddProps
): JSX.Element => {
  const [horticulturies, sethorticulturies] = useState<
    CardHorticulturalProps[]
  >([])
  const [categories, setcategories] = useState<CardCategoryProps[]>([])

  return (
    <Wrapper>
      <Container>
        <ToolbarHome />
      </Container>

      <Container
        width={[1]}
        padding={'10vh'}
        mt={['5vh']}
        ml={['16vh']}
        alignItems="center"
      >
        <CardInfo />
      </Container>

      <Container width={[1]} padding={'8vh'} ml={['16vh']}>
        <Wrapper>
          <Container width={[1 / 2, 1]} padding={[2]} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              style={{
                width: '80%',
                height: '5vh',
                borderRadius: '4vh',
              }}
            >
              <IconButton>
                <AddIcon />
                Adicionar Categoria
              </IconButton>
            </Button>
          </Container>

          <Container width={[1 / 2, 1]} padding={[2]} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              style={{ width: '80%', height: '5vh', borderRadius: '4vh' }}
            >
              <IconButton>
                <AddIcon />
                Adicionar Hortaliça
              </IconButton>
            </Button>
          </Container>
        </Wrapper>
      </Container>

      <>
        {categories.length === 0 ? (
          <Container width={[1, 1 / 2]} padding={'20vh'}>
            <Typography variant="h4" color={'primary'}>
              Sem conteúdo
            </Typography>
          </Container>
        ) : (
          <>
            {categories.map((category: CardCategoryProps) => (
              <Container key={category.id} width={[1]} ml={4}>
                <Typography variant="h3">{category.name}</Typography>

                <>
                  {horticulturies.length === 0 ? (
                    <Container width={[1, 1 / 2]}>
                      <Typography variant="h4" color={'primary'}>
                        Sem conteúdo
                      </Typography>
                    </Container>
                  ) : (
                    <>
                      {horticulturies.map(
                        (horticultural: CardHorticulturalProps) => (
                          <Container
                            key={horticultural.id}
                            width={[1, 1 / 3]}
                            m={2}
                          >
                            <CardHorticultural
                              theme={theme}
                              cardHorticultural={horticultural}
                            />
                          </Container>
                        )
                      )}
                      <Divider />
                    </>
                  )}
                </>
              </Container>
            ))}
          </>
        )}
      </>
    </Wrapper>
  )
}
