import React, { FC, useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'

// components
import { Flex, Box } from 'reflexbox'
import { CardHorticultural } from '../CardHorticultural'

// interfaces
import { BlockHorticulturiesProps } from './interface'
import { CardHorticulturalProps } from '../CardHorticultural/interface'

// services
import { specificAxios } from '../../services/api'

export const BlockHorticulturies: FC<BlockHorticulturiesProps> = ({
  category_id,
}: BlockHorticulturiesProps) => {
  const [horticulturies, sethorticulturies] = useState<
    CardHorticulturalProps[]
  >([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    specificAxios
      .get(`/categories/${category_id}/horticultures`)
      .then(({ data }: AxiosResponse<CardHorticulturalProps[]>) => {
        sethorticulturies(data)
      })
      .catch((error) => {
        console.error('Ocorreu um erro: ', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      {loading ? (
        <div>Carregando</div>
      ) : horticulturies && horticulturies.length === 0 ? (
        <div>Sem Conteúdo</div>
      ) : (
        <Flex flexWrap="wrap">
          {horticulturies.map((horticultural: CardHorticulturalProps) => (
            <Box key={horticultural.id} width={[1 / 4]} mx={[2]}>
              <CardHorticultural {...horticultural} />
            </Box>
          ))}
        </Flex>
      )}
    </>
  )
}
