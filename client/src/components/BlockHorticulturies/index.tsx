import React, { FC, useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'

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
      .get(`/categories/${category_id}/horticulturies`)
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
  return <>{loading ? <div>Carregando</div> : <div>Deu certo </div>}</>
}
