//dependencias
import React, { useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'

// interfaces
import { CategoryProps } from './interface'

//componentes
import { Button, IconButton, Typography } from '@material-ui/core'
import { CardInfo, ToolbarHome, BlockHorticulturies } from '../../components'
import { Container, Wrapper } from './style'

//icone
import AddIcon from '@material-ui/icons/Add'

// services
import { specificAxios } from '../../services/api'

export const Home = (): JSX.Element => {
  const [categories, setcategories] = useState<CategoryProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    specificAxios
      .get('/categories')
      .then(({ data }: AxiosResponse<CategoryProps[]>) => {
        setcategories(data)
      })
      .catch((error) => {
        console.error('Ocorreu um erro: ', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

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
      {loading ? (
        <div>Carregando</div>
      ) : (
        <>
          {(categories && categories.length) === 0 ? (
            <Container width={[1, 1 / 2]} padding={'20vh'}>
              <Typography variant="h4" color={'primary'}>
                Sem conteúdo
              </Typography>
            </Container>
          ) : (
            <>
              {categories.map((category: CategoryProps) => (
                <Container key={category.id} width={[1]}>
                  <Typography variant="h3">{category.name}</Typography>
                  <BlockHorticulturies category_id={category.id} />
                </Container>
              ))}
            </>
          )}
        </>
      )}
    </Wrapper>
  )
}
