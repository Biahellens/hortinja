import {
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core'
import React, { FC } from 'react'

//componentes
import { Box, Flex } from 'reflexbox'

// interfaces
import { ModalProps } from '../../interface'

export const HeaderModified: FC<ModalProps> = ({ id }: ModalProps) => {
  return (
    <div>
      {id !== 'create' ? (
        <Flex
          style={{
            padding: 100,
          }}
        >
          <Typography variant="h5" color="secondary">
            Editar Hortaliça
          </Typography>
        </Flex>
      ) : (
        <Flex
          style={{
            padding: 90,
          }}
        >
          <Typography variant="h5" color="secondary">
            Adicionar Hortaliça
          </Typography>
        </Flex>
      )}
    </div>
  )
}

export const ContentModified: FC<ModalProps> = ({ id }: ModalProps) => {
  return (
    <div>
      {id !== 'create' ? (
        <Flex>
          <Box>
            <Typography variant="h6" color="textPrimary">
              Nome
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Imagem
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Tonalidade
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Categoria
            </Typography>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={10}>Verduras</MenuItem>
              <MenuItem value={20}>Legumes</MenuItem>
              <MenuItem value={30}>Vegetais</MenuItem>
            </Select>

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Benefícios Nutricionais
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Preço de Mercado
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Medida
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Descrição
            </Typography>
            <TextField
              id="outlined-multiline-static"
              style={{ backgroundColor: '#D9D2CF' }}
            />
          </Box>
        </Flex>
      ) : (
        <Flex>
          <Box>
            <Typography variant="h6" color="textPrimary">
              Nome
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Imagem
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Tonalidade
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Categoria
            </Typography>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={10}>Verduras</MenuItem>
              <MenuItem value={20}>Legumes</MenuItem>
              <MenuItem value={30}>Vegetais</MenuItem>
            </Select>

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Benefícios Nutricionais
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Preço de Mercado
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Medida
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: '#D9D2CF' }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              style={{ marginTop: '2vh' }}
            >
              Descrição
            </Typography>
            <TextField
              id="outlined-multiline-static"
              style={{ backgroundColor: '#D9D2CF' }}
            />
          </Box>
        </Flex>
      )}
    </div>
  )
}

export const FooterModified: FC<ModalProps> = ({
  id,
  handleClose,
}: ModalProps) => {
  return (
    <div>
      {id !== 'create' ? (
        <Flex justifyContent="center" mt={[20]}>
          <Box width={[1 / 3]}>
            <Button
              onClick={handleClose}
              style={{
                width: '12vh',
                height: '4vh',
                color: '#FFFF',
                backgroundColor: '#111111',
                borderRadius: '2vh',
              }}
            >
              Fechar
            </Button>
          </Box>

          <Box width={[1 / 3]}>
            <Button
              style={{
                width: '12vh',
                height: '4vh',
                color: '#FFFF',
                backgroundColor: 'red',
                borderRadius: '2vh',
              }}
            >
              Salvar
            </Button>
          </Box>
        </Flex>
      ) : (
        <Flex justifyContent="center" mt={[20]}>
          <Box width={[1 / 3]}>
            <Button
              onClick={handleClose}
              style={{
                width: '12vh',
                height: '4vh',
                color: '#FFFF',
                backgroundColor: '#111111',
                borderRadius: '2vh',
              }}
            >
              Fechar
            </Button>
          </Box>

          <Box width={[1 / 3]}>
            <Button
              style={{
                width: '12vh',
                height: '4vh',
                color: '#FFFF',
                backgroundColor: 'red',
                borderRadius: '2vh',
              }}
            >
              Criar
            </Button>
          </Box>
        </Flex>
      )}
    </div>
  )
}
